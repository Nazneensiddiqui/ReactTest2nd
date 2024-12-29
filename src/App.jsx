import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Theme from "./pages/Theme";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Counter from "./pages/Counter";



const App =()=>{
  return(
    <>
   <center>
    <h1>React Test</h1>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="Home" element={<Home/>}/>
      <Route path="Counter" element={<Counter/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="Theme" element={<Theme/>}/>
      <Route path="Todo" element={<Todo/>}/>
       </Route>
    </Routes>
    
    </BrowserRouter>


    </center> 
    </>
  )
}
export default App;