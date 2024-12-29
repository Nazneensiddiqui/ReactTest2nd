import { configureStore } from "@reduxjs/toolkit";
import myReducer from "../pages/SliceCounter"
import mybgReducer from "../pages/bgcolorSlice"
import dataReducer from "../pages/TodoSlice"

const Store=configureStore({
    reducer:{
        mycounter:myReducer,
        mycolor:mybgReducer,
        mytodo:dataReducer
    }
})
export default Store;