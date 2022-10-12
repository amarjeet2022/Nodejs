import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        readusers();
    }, [])
    const readusers = async () => {
        const result = await axios.get("http://localhost:3001/users", users);
        setUsers(result.data);
    };
    const deleteUsers = async id => {
         await axios.delete(`http://localhost:3001/users/${id}`)
         readusers();
    };

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h1>Home</h1>

                    <table className="table">
                        <thead>
                            <tr className='bg-dark text-white'>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">username</th>
                                <th scope="col">email</th>
                               <th scope="col">Action</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr>
                                        <th scope='row'>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>
                                        <Link to= {`/CRUD1/view/${user.id}`} className="btn btn-primary mx-2"><i className="fa fa-eye" aria-hidden="true"></i></Link>
                                            
                                        <Link to={`/CRUD1/edit/${user.id}`} className="btn btn-danger mx-2">Edit</Link>
                                            <Link to='/' className="btn btn-primary mx-2" onClick={()=>deleteUsers(user.id)}>Delete</Link>
                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Home