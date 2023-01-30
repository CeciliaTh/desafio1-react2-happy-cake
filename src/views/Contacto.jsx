import React from 'react'
import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap';

const Contacto = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-4 ">
        <Container>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label><h1>Cuéntanos, ¿En qué te podemos ayudar?</h1></Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label><h2>Descripción</h2></Form.Label>
        <Form.Control as="textarea" rows={4} />
        </Form.Group>
        <div className="d-flex justify-content-center">
        <Button type="submit" variant="danger">Enviar</Button>
        </div>
        
    </Form>
        </Container>

    

    </div>
  )
}

export default Contacto