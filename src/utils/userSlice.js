import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUserDetails: (state, action) => {
      return action.payload;
    },
    removeUserDetails: (state, action) => {
      return null;
    },
  },
});

export default userSlice.reducer;
export const { addUserDetails, removeUserDetails } = userSlice.actions;
