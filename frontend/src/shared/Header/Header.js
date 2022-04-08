import React from 'react'
import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {

    return (
        <div className="header">
            <li>
                <Link className='link' to="/home">Weather App</Link>
            </li>
            <li>
                <Link className='link' to="/profile">Profile</Link>
            </li>
        </div>
    )
}

export default Header