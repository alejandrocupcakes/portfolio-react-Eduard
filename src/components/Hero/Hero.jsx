import React from "react";
import './Hero.css'
import HTML from'../../assets/img/HTMl.png'
import javascript from'../../assets/img/java.png'
import react from'../../assets/img/React-Symbol.png'

const Hero = () => {
    return(
        <section className="hero-container">
<div className="hero-content">
    <h2>Quien soy</h2>
    <p>Soy Eduard AAlejandro Cortez Salas, soy originario de Venezuela, pero resido en Colombia, Termine bachiller y soy tecnico en mecanica industrial, me gusta el footer y las creacion de las paginas coloridas
     </p> </div>
        
<div className="hero-img">
<div className="tech-icon">
    <img src={HTML} alt="" />
    </div>
    <div>
        <img src={javascript} alt="" />
    </div>
    <div>
        <img src={react} alt="" />
    </div>
    </div>
    </section>
    )
}
export default Hero