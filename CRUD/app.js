
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './component/CRUD/About'
import Home from './component/CRUD/Home'
import Edit from './component/CRUD/Edit'
import AddUser from './component/CRUD/AddUser';
import View from './component/CRUD/View';
import New_Navbar from './New_Navbar/Navbar'

 const App=()=>{
    return(
           <Router>
            < New_Navbar></New_Navbar>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/CRUD/view/:id' element={<View/>}/>
              <Route path='/CRUD/addUser' element={<AddUser/>}/>
              <Route path='/CRUD/edit/:id' element={<Edit/>}/>
            </Routes>
           </Router>
    )
 }
 export default App