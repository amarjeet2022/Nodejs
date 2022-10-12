import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './ToDoList/Home'
import Navbar from './ToDoList/Navbar/NavbarToDo'
import ToDoList from './ToDoList/ToDo-List'
import 'bootstrap/dist/css/bootstrap.min.css';
const AppToDo =()=>{
return(
    <>
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='ToDoList' element={<ToDoList/>}/>
        </Routes>
    </Router>
    </>
)

}
export default AppToDo