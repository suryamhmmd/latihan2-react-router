import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div style={nav}>
            <h1><Link to='/' style={link}>Kodemansurs</Link></h1>
            <ul style={myUl}>
                <li><Link to='/' style={link}>Home</Link></li>
                <li><Link to='/about' style={link}>About</Link></li>
                <li><Link to='/contact'style={link}>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar

const nav = {
    display: "flex",
    background: "#fe024e",
    padding: "0 6rem",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
}

const myUl = {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    width: "20%",
}

const link = {
    color: 'white',
    textDecoration:"none",
}