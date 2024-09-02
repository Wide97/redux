import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

const store = configureStore({
    reducers: mainReducer 
})

export default store