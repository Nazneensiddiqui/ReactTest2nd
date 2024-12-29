
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData, deletData } from "./todoSlice";

const ToDo = () => {
  const [data, setData] = useState("");
  const Data = useSelector((state) => state.mytodo.task); 
  const dispatch = useDispatch();

  const txtDataAdd = () => {
    dispatch(addData({ id: Date.now(), work: data }));
    setData(""); // Clear input after adding
  }

  const deletdata=(id)=>{
    dispatch(deletData(id))
 }
 

  let sno = 0;
  const ans = Data.map((key) => {
    sno++;
    return (
      <tr border="2px">
        <td>{sno}</td>
        <td>{key.work}</td>
        <td>
          <button onClick={()=>{dispatch(deletdata(key.id))}}>Delet</button>
        </td>
      </tr>
    );
  });

  return (
    <center>
      <h1> Welcome to Todo List </h1>
      Enter Data: <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={txtDataAdd}>Add Data</button><br/>
      <hr/>
      <table style={{border: "1px solid red" }}>
      <tr >
            <th>S.No</th>
            <th>Your Task</th>
            <th>Action</th>
          </tr>
       {ans}
  </table>
    </center>
  );
};

export default ToDo;