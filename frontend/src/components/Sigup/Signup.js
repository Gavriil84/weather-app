import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../shared/Button';

const Signup = (props) => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signUp = async (e) => {
        e.preventDefault();

        try {
            let config = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                }
            }


            const { data } = await axios.post('http://localhost:5000/api/v1/profile', { email, userName, password }, config)
            setEmail('')
            setPassword('')
            setUserName('')
            navigate('/')

        } catch (error) {
            console.log(error)
        }
    }

    const emailHandler = (e) => {
        e.preventDefault();

        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        e.preventDefault();

        setPassword(e.target.value)
    }

    const userNameHandler = (e) => {
        e.preventDefault();

        setUserName(e.target.value)
    }


    return (
        <div className="signup">
            <h1>Create Account</h1>
            <form onSubmit={signUp}>
                <label>
                    <p>User Name</p>
                    <input type="text" name="username" value={userName} onChange={userNameHandler} />
                </label>

                <label>
                    <p>Email</p>
                    <input type="text" name="email" value={email} onChange={emailHandler} />
                </label>

                <label>
                    <p>Password</p>
                    <input type="password" name="password" value={password} onChange={passwordHandler} />
                </label>

                <span>Already have an account? <Link to='/'>Log in</Link></span>
                <Button type='submit' >Create Account</Button>
            </form>
        </div>
    )
}

export default Signup
