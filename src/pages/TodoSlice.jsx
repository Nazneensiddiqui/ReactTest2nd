import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"mytodo",
    initialState:{
      task:[]
    },
    reducers:{
        addData:(state , actions)=>{
           
           state.task.push(actions.payload); 
        },
        deletData:(state , actions)=>{
          state.task=state.task.filter(key=>key.id!=actions.payload)
        }
    }
})
export const {addData , deletData}=todoSlice.actions;  //App.jsx
export default todoSlice.reducer;  // store.jsx