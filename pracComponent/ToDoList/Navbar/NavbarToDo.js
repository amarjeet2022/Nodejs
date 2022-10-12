import React from "react"
import {Link} from "react-router-dom"
const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
         <div className="ml-auto">
            <ul className="navbar-nav">
            <li className="nav-item"><Link className='nav-link' to='/'>Home</Link></li>
            <li className="nav-item"><Link className='nav-link' to='ToDoList'>ToDoList</Link></li>
            </ul>
         </div>
        </nav>
    )
}
export default Navbar