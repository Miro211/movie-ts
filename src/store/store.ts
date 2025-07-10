import { configureStore } from "@reduxjs/toolkit";
import  genresSlice  from "./slices/genresSlice";

const store = configureStore({
    reducer : {
        genres : genresSlice
    }
})

export default store