import { Link, Outlet } from "react-router-dom"


const Layout=()=>{
    return(
        <>
        <div style={{backgroundColor:"skyblue", color:"white", height:"40px"}}>
     <Link to="home">Home  || </Link>   
     <Link to="counter">Counter App   ||</Link>
     <Link to="theme">ThemeChangeApp  ||</Link>
     <Link to="todo">ToDoListApp     ||</Link>
     <Link to="contact">Contact Us    ||</Link>
     </div>
     <hr/>
     <Outlet/>
     <hr/>

 </>
    )
}
export default Layout;