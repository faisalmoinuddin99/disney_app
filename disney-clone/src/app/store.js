import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice"; // ✅ fixed import

const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // ✅ fixed
        }),
});

export default store;
