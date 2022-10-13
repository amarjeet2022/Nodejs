import React from 'react'
import ToDo from './ToDo'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
const AppToDo =()=>{
    return(
           <Router>
            <Navbar></Navbar>
            <Routes>
                <Route path='/ToDo' element={<ToDo/>}/>
            </Routes>
           </Router>
    )
}
export default AppToDo