export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? "" : "Enter a valid Email";
};

export const validatePassword = (password) => {
  return password.length >= 6
    ? ""
    : "Password must be at least 6 characters long";
};

export const validateName = (name) => {
  if (!name.trim()) return "Name is required.";
  if (name.length < 3) return "Name must be at least 3 characters.";
  return ""; // ✅ Return an empty string instead of undefined
};
