import React from "react"
import './Navbar.css'
export const Navbar = ( ) => {
    return(
       <>
       <nav className="nav-wrapper">
        <div className="nav-content">
        <img src="./assets/img/Perfil.jpg" alt="" className="logo" />
        <ul>
            <li><a href="" className="menu-item">Home</a></li>
            <li><a href="" className="menu-item">Skills</a></li>
            <li><a href="" className="menu-item">Work Experience</a></li>
            <li><a href="" className="menu-item">Contact Me</a></li>
            <button className="contact-btn" onClick={()=>{}}>
                hire Me
            </button>
        </ul>
        </div>
       </nav>
       </>
    )
}