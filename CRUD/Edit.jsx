import axios from 'axios';
import { useEffect } from 'react';
// import {Link} from 'react-router-dom'
import {React, useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom'


const Edit = () => {

    let history = useNavigate();

const {id}= useParams();
 const [users, setUsers]=useState({
    name:"",
    username:"",
    email:""
 });

 useEffect(()=>{
    readusers();
 },[])

 const readusers = async ()=>{
    const result =await axios.get(`http://localhost:3001/users/${id}`)
    setUsers(result.data)
 }


const onInputchange= e =>{
    setUsers({...users , [e.target.name]: e.target.value})
}

const   onSubmit = async e =>{
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, users);
    history('/')

}
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-4'>
                <form onSubmit={e=>onSubmit(e)} className='bg-dark text-white '>
                    <card>
                        <div className='cardheader'> <b>Edit Users</b></div>
                        <div className='cardbody' >
                            <label className='form-group'>
                                <input 
                                type='text'
                                className='form-control form-control-lg'
                                placeholder='New Name'
                                name='name'
                                value={users.name}
                                onChange={e => onInputchange(e)}  />
                            </label><br></br>
                            <label className='form-group'>
                                <input 
                                type='text'
                                className='form-control form-control-lg'
                                placeholder='New UseName'
                                name='username'
                                value={users.username}
                                onChange={e => onInputchange(e)}  />
                            </label><br></br>
                            <label className='form-group'>
                                <input 
                                type='text'
                                className='form-control form-control-expand-lg'
                                placeholder='New email   @ .com'
                                name='email'
                                value={users.email}
                                onChange={e => onInputchange(e)}  />
                            </label><br></br>
                            {/* <Link className='btn btn-warning' to='/'>Change</Link><br></br> */}
                            <button className='btn btn-primary'>New Data</button>
                        </div>
                    </card>
                </form>
                </div>
            </div>
        </div>
    )
}
export default Edit