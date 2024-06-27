import { configureStore } from "@reduxjs/toolkit";
import { userLogin } from "../apis/user";

const store = configureStore({
    reducer:{
        [userLogin.reducerPath]: userLogin.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userLogin.middleware),
});

export default store;
