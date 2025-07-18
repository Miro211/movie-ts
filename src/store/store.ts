import { configureStore } from "@reduxjs/toolkit";
import  genresSlice  from "./slices/genresSlice";

const store = configureStore({
    reducer : {
        genres : genresSlice
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store