import { React, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
const EditUsers = () => {

    let history = useNavigate();
    const { id } = useParams();

    const [users, setUsers] = useState({
        name: "",
        username: "",
        email: ""
    });

    // const [name, UserName, Email] = user;
    const onInputchange = e => {
        setUsers({ ...users, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        readusers()
    }, []);

    const onSubmitHandler = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, users);
        history("/")
    }

    const readusers = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`)
        
        setUsers(result.data);
    };

    return (
        <>
            <div className='container mt-5'>
                <div className='row=4'>
                    <div className='col-5'>
                        <form onSubmit={e => onSubmitHandler(e)} className='bg-dark text=white'>
                            <div className='card'>
                                < div className='cardhead'>Edit Users</div>
                                <div className='cardbody'>
                                    <label className='form-group' >
                                        <input
                                            type='text'
                                            className='form-control form-control-lg'
                                            placeholder='Name'
                                            name='name'
                                            value={users.name}
                                            onChange={e => onInputchange(e)}
                                        />
                                    </label>

                                    <label className='form-group' >
                                        <input
                                            type='text'
                                            className='form-control form-control-lg'
                                            placeholder='UserName'
                                            name='username'
                                            value={users.username}
                                            onChange={e => onInputchange(e)}
                                        />
                                    </label>
                                    <label className='form-group' >
                                        <input
                                            type='text'
                                            className='form-control form-control-lg'
                                            placeholder='Email'
                                            name='email'
                                            value={users.email}
                                            onChange={e => onInputchange(e)}
                                        />
                                    </label>

                                    <button className='btn btn-primary'>New Data</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
export default EditUsers