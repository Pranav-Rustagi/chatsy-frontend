import { configureStore } from "@reduxjs/toolkit";
import { userInfoReducer } from "../reducers";

const store = configureStore({
    reducer: {
        userInfo: userInfoReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

export default store;