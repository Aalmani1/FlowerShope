import React from 'react'
import Carousel from 'react-bootstrap/carousel'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup'
import Button from 'react-bootstrap/Button'
import img1 from './img/img1.jpg'
import img2 from './img/img2.png'
import img3 from './img/img3.jpg'

export default function logein() {
    return (
        <div className="logepag">
            <div>
            <Carousel fade >
  <Carousel.Item>
    <img
      className="d-blocK"
      width="100%"
      height="480px"
      src={img1}
    ></img>
    <Carousel.Caption>
      <h1 className="logein">LOGEIN</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block" 
      width="100%"
      height="480px"
      src={img2}
    ></img>

    <Carousel.Caption>
      <h1 className="logein">LOGEIN</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      width="100%"
      height="480px"
      src={img3}
    ></img>

    <Carousel.Caption>
     
      <h1 className="logein">LOGEIN</h1>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
            </div>
 <div className="logeForm">
 <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control className="loginput"  type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control className="loginput" type="password" placeholder="Password" />
  </Form.Group>
  <Button className="logbutton" variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
        </div>
    )
}
