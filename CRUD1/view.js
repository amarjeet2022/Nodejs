import {React, useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

const View =()=>{
    const [users, setUsers]= useState({
        name:"",
        username:"",
        email:""
    }) 
    const {id} =useParams();
     useEffect(()=>{
        readusers();

    },[]);
     const readusers = async  ()=>{
            const result = await axios.get(`http://localhost:3001/users/${id}`);
            setUsers(result.data);
     }
    return (
       <>
       <div className='container mt-5'>
        <Link className='btn btn-primary' to='/'>Return to Home Page</Link>
        <div className='row'>
            {/* <h6 className='display-4'>View-ID: {users.id}</h6> */}
            <div className='column'>
                <ul className='list-group'>

                    <li className='list-group-item'>name: {users.name}</li>
                    <li className='list-group-item'>username: {users.username}</li>
                    <li className='list-group-item'>email: {users.email}</li>
                    
                </ul>
            </div>
        </div>
       </div>
       </>
    )
}
export default View