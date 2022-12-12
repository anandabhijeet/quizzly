import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./slices/questionSlice";

const store = configureStore({
    reducer: questionSlice,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;