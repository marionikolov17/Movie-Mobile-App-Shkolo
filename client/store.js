import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./src/entities/users/reducers/userSlice";

export default configureStore({
    reducer: {
        user: userReducer,
    }
});