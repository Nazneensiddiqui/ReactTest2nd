import { createSlice } from "@reduxjs/toolkit";

const bgColorSlice=createSlice({
    name:"mycolor",
    initialState:{
        bgclr:"pink"
    }, 
    reducers:{
        changeColor:(state ,actions)=>{
            state.bgclr=actions.payload
        }
    }
})
export const {changeColor}=bgColorSlice.actions;
export default bgColorSlice.reducer;