import React from 'react'
import Button from '../shared/Button'

import './Login.scss';

const Login = () => {
    return (
        <div className="login">
            <h1>Log In</h1>
            <form>
                <label>
                    <p>Email</p>
                    <input type="email" />
                </label>

                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>

                <span>Don't have an account? <button>Create account</button></span>
                <Button type='submit'>Log In</Button>
            </form>
        </div>
    )
}

export default Login
