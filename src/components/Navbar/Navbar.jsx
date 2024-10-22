import React, { useState } from "react"
import './Navbar.css'
import Perfil from '../../assets/img/Perfil.jpg'
const Navbar = () => {
    return(
       <>
       <nav className="nav-wrapper">
        <div className="nav-content">
        <img src={Perfil} alt="" className="logo" />
        <ul>
            <li><a href="" className="menu-item">Home</a></li>
            <li><a href="" className="menu-item">Skills</a></li>
            <li><a href="" className="menu-item">Work Experience</a></li>
            <li><a href="" className="menu-item">Contact Me</a></li>
            <button className="contact-btn" onClick={()=>{}}>
            hire</button>
            </ul>
        </div>
       </nav>
       </>
    )
}
export default Navbar