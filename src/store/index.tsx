import { configureStore } from "@reduxjs/toolkit";
import { userApis } from "../apis/user";
import { productApis } from "../apis/products";


const store = configureStore({
    reducer:{
        [userApis.reducerPath]: userApis.reducer,
        [productApis.reducerPath]:productApis.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApis.middleware,productApis.middleware),
});

export default store;
