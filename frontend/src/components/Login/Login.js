import axios from 'axios';
import React, { useState } from 'react'
import { Link, Route, useNavigate } from 'react-router-dom';
import Button from '../../shared/Button'

import './Login.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();

        try {
            let config = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                }
            }

            const { data } = await axios.post('/api/v1/login', { email, password }, config)

            if (email == data.email && password == data.password) {
                localStorage.setItem('userInfo', JSON.stringify(data.id))
                setErr(false)
                setEmail('')
                setPassword('')
                navigate('/home')
            } else {
                setErr(true)
                console.log(data)
            }
        } catch (error) {
            console.log(error);
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

    return (
        <div className="login">
            <h1>Log In</h1>
            <form onSubmit={login}>
                <label>
                    <p>Email</p>
                    <input type="text" name="email" value={email} onChange={emailHandler} />
                </label>

                <label>
                    <p>Password</p>
                    <input type="password" name="password" value={password} onChange={passwordHandler} />
                </label>

                <span>Don't have an account? <Link to='/signup'>Create account</Link></span>
                <Button type='submit' >Log In</Button>
            </form>
        </div>
    )
}

export default Login
