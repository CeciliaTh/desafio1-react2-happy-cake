import React from 'react'
//import Imagen from "../Imagenes/Condiciones.ico";
import Imagen from "../Imagenes/HappyCake.jpg";


const Home = () => {
    return (
        <div className="d-flex flex-column align-items-center mt-4">
            <h1>Bienvenido a Happy Cake 🎂</h1>
            <p>El lugar de los pasteles felices</p>
            <img src={Imagen} alt="imagen" />
        </div>
    )
}

export default Home