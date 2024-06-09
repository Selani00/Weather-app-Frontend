import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    signInScuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    signoutSuccess: (state) => {
      state.currentUser = null;
    },
  },
});

export const { signInScuccess, signoutSuccess } = userSlice.actions;

export default userSlice.reducer;
