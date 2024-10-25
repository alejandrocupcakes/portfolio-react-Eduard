import React from "react";
import './Hero.css'
import HTML from'../../assets/img/HTMl.png'
import javascript from'../../assets/img/java.png'
import react from'../../assets/img/React-Symbol.png'


const Hero = () => {
    return(
        <section className="hero-container">
<div className="hero-content">
    <div className="im">
    <h2>Quien soy</h2>
    <p>Soy Eduard Alejandro Cortez Salas, soy originario de Venezuela, pero resido en Colombia, Termine bachiller y soy tecnico en mecanica industrial, me gusta el footer y las creacion de las paginas coloridas
     </p> </div></div>
     <div className="hero-content2">
        <div className="information">
            <h3>Información Personal</h3>
            <p>Nacionalidad: Venezolano.Fecha de nacimiento:11/12/2003.Estudios: Bachiller Técnico Industrial.specialidad: Mecánica Industrial.Lenguaje: Español y Chino mandarín, HSK 1.Pasatiempo: Leer y ver Anime.
</p>
        </div>

     </div>
       

{/*<div className="hero-img">
<div className="tech-icon">
    <img src={HTML} alt="" />
    </div>
    <div className="tech-icon">
        <img src={javascript} alt="" />
    </div>
    <div>
        <img src={react} alt="" />
    </div>
    </div>*/}
    </section>
    )
}
export default Hero