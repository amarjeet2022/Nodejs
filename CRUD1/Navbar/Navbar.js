import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Navbar extends Component {
  render() {
    return <>
      <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
        <Link to='/' className='Navbar-brand text-white'>CRUD</Link>
        <div className='ml-auto'>
          <ul className='navbar-nav'>
            <li className='nav-list'> <Link className='nav-link' to='/'>Home</Link></li>
            <li className='nav-list'> <Link className='nav-link' to='/About'>About</Link></li>
            <li className='nav-list'> <Link className='nav-link' to='/CRUD'>CRUD</Link></li>
            <li className='nav-list'> <Link className='nav-link' to='/ToDo'>ToDo</Link></li>
          </ul>
        </div>
        
        <Link className='btn-btn-outline-light text-white' to='/CRUD1/add'>Add Users</Link>
      </nav>

    </>
  }
}
export default Navbar