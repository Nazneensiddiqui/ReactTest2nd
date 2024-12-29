import { useSelector, useDispatch } from "react-redux";
import { increment,decrement } from "./SliceCounter";

const Counter=()=>{
    const count = useSelector((state)=>state.mycounter.cnt)
    const dispatch= useDispatch();
    return(
        <>
        
      <h1> Counter Page</h1>  
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <h1>{count}</h1>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    
      
    
        </>
    )
}
export default Counter;