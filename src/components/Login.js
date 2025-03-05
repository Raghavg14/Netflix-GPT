import React, { useState } from "react";
import Header from "./Header.js";
import { Eye, EyeOff } from "lucide-react";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUserDetails } from "../utils/userSlice.js";
import { Netflix_Background_IMG } from "../utils/constant.js";
const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "name") {
      setErrors({ ...errors, name: validateName(value) });
    }
    if (name === "email") {
      setErrors({ ...errors, email: validateEmail(value) });
    }
    if (name === "password") {
      setErrors({ ...errors, password: validatePassword(value) });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.password ||
      (!signInForm && !formData.name)
    ) {
      setErrors({
        ...errors,
        error: "Inputs are missing. Please fill all fields.",
      });
      return;
    } else {
      setErrors({});
    }

    // Filter out empty error messages
    const errorMessages = Object.values(errors).filter((error) => error);

    if (errorMessages.length > 0) {
      // console.log("Form has errors:" + errors);
      return;
    } else {
      if (!signInForm) {
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: formData?.name,
            })
              .then(() => {
                const {
                  uid,
                  email,
                  displayName, // Manually setting it
                } = auth.currentUser;
                dispatch(
                  addUserDetails({
                    uid,
                    email,
                    displayName,
                  })
                );
              })
              .catch((error) => {
                setErrors({ ...errors, error: error });
              });
          })
          .catch((error) => {
            console.error(error.message);
            setErrors({ ...errors, error: error });
          });
      } else {
        //sign in form
        signInWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
          })
          .catch((error) => {
            console.error(error.message);
            setErrors({ ...errors, error: error });
          });
      }
      // console.log("Form submitted successfully:");
    }
  };

  // console.log(errors);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src={Netflix_Background_IMG}
          alt="background-image"
        />
      </div>
      <form className="absolute bg-black bg-opacity-80 p-12 my-40 md:w-3/12 mx-6 md:mx-auto left-0 right-0 rounded-md text-white">
        <h1 className="w-full text-2xl md:text-3xl font-semibold mb-6">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!signInForm && (
          <>
            <input
              className="w-full bg-black bg-opacity-70 mb-6 p-4 border border-slate-200 rounded-md"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mb-4">{errors.name}</p>
            )}
          </>
        )}
        <input
          className="w-full  bg-black bg-opacity-70 mb-6 p-4 border border-slate-200 rounded-md"
          type="text"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-4">{errors.email}</p>
        )}
        <div className="relative">
          <input
            className="w-full  bg-black bg-opacity-70 mb-6 p-4 border border-slate-200 rounded-md"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-[17px] top-[17px] text-gray-500 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mb-4">{errors.password}</p>
        )}
        {errors.error && (
          <p className="text-red-500 text-sm mb-4">
            {errors.error.code || errors.error}
          </p>
        )}
        <button
          className="w-full p-2 rounded-md bg-red-700"
          onClick={handleFormSubmit}
        >
          {signInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-4">
          {signInForm ? "New to Netflix?" : "Already a member?"}{" "}
          <span
            className="font-bold hover:cursor-pointer"
            onClick={() => setSignInForm(!signInForm)}
          >
            {signInForm ? "Sign Up Now." : "Sign In here."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
