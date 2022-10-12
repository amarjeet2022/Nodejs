// CRUD1 AudioParamMap.js

import React from 'react'
import Navbar from './Navbar/Navbar'
import About from './component/CRUD1/About'
import Home from './component/CRUD1/Home'
import CRUD from './component/CRUD1/CRUD'
import EditUsers from './component/CRUD1/EditUsers'
import View from './component/CRUD1/view'
import AddUsers from './component/CRUD1/Addusers'

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
function App() {

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/About' element={<About/>}/>
                    <Route path='/CRUD' element={<CRUD/>}/>
                    <Route path='/CRUD1/add' element={<AddUsers/>}/>
                    <Route path= "/CRUD1/edit/:id"   element={<EditUsers/>}/>
                    <Route path='/CRUD1/view/:id' element={<View/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App