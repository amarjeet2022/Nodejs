import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const AddUsers = () => {
    let history = useNavigate();
    const [users, setUsers] = useState({
        name: "",
        username: "",
        email: ""

    });

    const { name, username, email } = users;
    const onInputchange = e => {
        setUsers({ ...users,
            [e.target.name]: e.target.value
           
        })

    };
    const onSubmitHandler = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3001/users", users);
        history("/");


    }

    return (
        <>
            <div className='container mt-5'>
                <div className='row=4'>
                    <div className='col-5'>
                        <form onSubmit={e => onSubmitHandler(e)} className='bg-dark text=white'>
                            <div className='card'>
                                < div className='cardhead'>ADD Users</div>
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
                                            name='UserName'
                                            value={users.username}
                                            onChange={e => onInputchange(e)}
                                        />
                                    </label>
                                    <label className='form-group' >
                                        <input
                                            type='text'
                                            className='form-control form-control-lg'
                                            placeholder='Email'
                                            name='Email'
                                            value={users.email}
                                            onChange={e => onInputchange(e)}
                                        />
                                    </label>

                                    <button className='btn btn-primary'>ADD</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )

}
export default AddUsers