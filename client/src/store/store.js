

import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../redux/loaderSlice";
import userReducer from "../redux/userSlice";

export const store = configureStore({
    reducer: {
        loader: loaderReducer,
        user: userReducer
    }
});

