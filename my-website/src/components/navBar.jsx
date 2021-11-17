import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function navBar() {
    const navStyle = {
        color: '#97CC04',
        textDecoration: 'none'
    };

    return (
        <nav className="Nav">
            <ul className="nav-links">
                <Link style={navStyle} to='/'>
                    <li className="listPadding">Home</li>
                </Link>
                <Link style={navStyle} to='/about'>
                    <li className="listPadding">About</li>
                </Link>
            </ul>
        </nav>
    )
}

export default navBar