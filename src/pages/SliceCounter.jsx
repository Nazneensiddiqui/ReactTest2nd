import { createSlice } from "@reduxjs/toolkit";

const MycounterSlice=createSlice({
    name:"mycounter",
    initialState:{
        cnt:10
    },
    reducers:{
        increment:(state)=>{
            state.cnt=state.cnt+10
        },
        decrement:(state)=>{
            state.cnt=state.cnt-10
        },
        
    }
})
export const {increment,decrement}=MycounterSlice.actions;
export default MycounterSlice.reducer;