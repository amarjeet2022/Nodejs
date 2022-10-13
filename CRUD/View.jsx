import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const View = () => {
    const [users, setUsers] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        readusers();
    }, [])



    const readusers = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        setUsers(result.data);
    }
    return (
        <div className='container mt-5'>
            <Link className='btn btn-primary' to='/'>Return to Home Page</Link>
            <div className='row'>
                <div className='col-md-6'>
            <ul className='list-group'>
                <li className='list-group-item'>Name: {users.name}</li>
                <li className='list-group-item'>UserName: {users.username}</li>
                <li className='list-group-item'>Email: {users.email}</li>
            </ul>
            </div>
        </div>
        </div>
    )
}
export default View