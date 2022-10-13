import axios from 'axios';
import {React, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

 const Home =()=>{

    const [users, setUsers]= useState([]);

    useEffect(()=>{
        readusers();
    }, [])

    const readusers = async () => {
        const result = await axios.get("http://localhost:3001/users", users)
        setUsers(result.data)
    };

    const deleteUsers= async id=>{
        await axios.delete(`http://localhost:3001/users/${id}`)
        readusers();
    }
    return(
        <>
        <div className='container mt-5'>
            <table className='table '>
                <thead>
                    <tr className='bg-dark text-white expand-lg'>
                    <th scope='col'>#</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>UserName</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index )=>(
                            <tr>
                                <th scope='row'>{index +1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                
                                <td>
                                    <Link className='btn btn-primary mx-2' to={`/CRUD/view/${user.id}`}><i class="fa-solid fa-eye"></i></Link>
                                    <Link className='btn btn-danger mx-2' to={`/CRUD/edit/${user.id}`}>Edit</Link>
                                    <Link className='btn btn-warning mx-2' to='/' onClick={()=>deleteUsers(user.id)}>Delete</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </>
    )

 }
 export default Home