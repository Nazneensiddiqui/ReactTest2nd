import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "./bgcolorSlice";

const Theme=()=>{
    const[color, setcolor]=useState("")
    const clr=useSelector((state)=>state.mycolor.bgclr)
    const dispatch=useDispatch();
    return(
        <>
        
      <h1> Theme  Page</h1>  
      Enter Color Name : <input type="text" value={color} onChange={(e)=>{setcolor(e.target.value)}}/>
      <button onClick={()=>{dispatch(changeColor(color))}}>click here</button><br/><br/>
      <div style={{width:"300px", height:"300px", border:"1px solid red", backgroundColor:clr}}>

      </div>
        </>
    )
}
export default Theme;