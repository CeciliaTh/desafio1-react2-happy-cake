import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap';

const Barra = () => {
  return (
    <div>
      
        <Navbar bg="danger" variant="dark">
          <Container className="justify-content-between">
            <div>
            <Link to="/" className="text-white ms-3 text-decoration-none">
              🏠 Inicio
            </Link>
            <Link to="/contacto" className="text-white ms-3 text-decoration-none">
              📒 ¡Contactanos!
            </Link>
            </div>
            
            <Navbar.Brand className="justify-content-end">Happy Cake 🎂</Navbar.Brand>
          </Container>
        </Navbar>
      
    </div>
  )
}

export default Barra