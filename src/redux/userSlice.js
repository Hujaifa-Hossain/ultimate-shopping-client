import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    isError: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },

    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },

    loginFailure: (state) => {
      state.isError = true;
      state.isFetching = false;
    },

    logOut: (state) => {
      state.currentUser = null;
    }
  },
});

export const { loginStart, loginSuccess, loginFailure, logOut } = userSlice.actions;
export default userSlice.reducer;
