import React from 'react'

const Footer = () => {
    return (
        <div style={foot}>
            <h1>My Footer</h1>
        </div>
    )
}

export default Footer;

const foot = {
    display: "flex",
    background: "#fe024e",
    padding: "0 6rem",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    position : "absolute",
    bottom: "0",
    width: "100%",
}