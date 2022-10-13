import React from 'react'
import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(
        
            <nav className='navbar navbar-expand-lg bg-primary navbar-dark'>
                <Link className='navbar-brand' to='/'> CRUD</Link>
                <div className='ml-auto'>
                    <ul className='navbar-nav'>
                        <li className='nav-list'><Link className='nav-link' to='/'>Home</Link></li>
                        <li className='nav-list'><Link className='nav-link' to='/about'>About</Link></li>
                        <Link className='btn btn-Prmary text-white' to='/CRUD/addUser'>Add Users</Link>
                    </ul>
                </div>
            </nav>
        
    )
}
export default Navbar