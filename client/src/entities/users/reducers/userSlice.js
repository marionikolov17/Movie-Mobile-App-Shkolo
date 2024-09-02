import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
    isAuthenticated: false
  },
  reducers: {
    authenticate: (state, action) => {
        state.isAuthenticated = true;
        state.profile = action.payload.profile;
    },
    logout: (state) => {
        state.isAuthenticated = false;
        state.profile = null;
    },
  },
});

export const { authenticate, logout } = userSlice.actions;

export default userSlice.reducer;

