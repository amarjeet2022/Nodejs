import {React, useState} from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
 const AddUser =()=>{

    let history = useNavigate();
    const [users, setUsers]=useState({
        name:"",
        username:"",
        email:"",

 });
 
 const onInputchange = e=>{ setUsers ({...users, [e.target.name]: e.target.value})};


const onSubmit =  async e =>{
    e.preventDefault();
    await axios.post("http://localhost:3001/users", users);
    history("/")
}

    return(
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <form onSubmit={e=>onSubmit(e)}>
                        <label className='form-group'>
                            <input 
                            type='text'
                            className='form-control'
                            placeholder='name'
                            name='name'
                            value={users.name}
                            onChange={e=> onInputchange(e)}
                            />
                        </label>
                        <label className='form-group'>
                            <input 
                            type='text'
                            className='form-control'
                            placeholder='UserName'
                            name='username'
                            value={users.username}
                            onChange={e=> onInputchange(e)}
                            />
                        </label>
                        <label className='form-group'>
                            <input 
                            type='text'
                            className='form-control'
                            placeholder='EMAIL'
                            name='email'
                            value={users.email}
                            onChange={e=> onInputchange(e)}
                            />
                        </label>
                        <button className='btn btn-warning'>ADD Users</button>

                    </form>
                </div>
            </div>
        </div>
    )
 }
 export default AddUser