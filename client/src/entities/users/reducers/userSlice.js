import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    name: "",
    username: "",
    email: "",
    isAuthenticated: false
  },
  reducers: {
    authenticate: (state, action) => {
        state.id = action.payload.user.uid;
        state.isAuthenticated = true;
        state.name = action.payload.additionalUserInfo.name;
        state.email = action.payload.additionalUserInfo.email,
        state.username = action.payload.additionalUserInfo.first_name;
    },
    logout: (state) => {
        state.id = "";
        state.isAuthenticated = false;
        state.name = "";
        state.email = "",
        state.username = "";
    },
  },
});

export const { authenticate, logout } = userSlice.actions;

export default userSlice;

