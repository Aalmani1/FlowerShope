import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/carousel";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.png";
import img3 from "./img/img3.jpg";
import Footer from "./Footer";
import axios from "axios"

export default function Logein() {
// let history = useHistory();
let navigate = useNavigate()
const [email, setEmail] = useState("")
const [pass, setPass] = useState("")
const [newuser, setNewuser] = useState([])
// const [auth, setAuth] = useState(false)

const handlesub = () =>{
  axios.post("/new/", {email:email, password:pass})
  .then( (response) => {
    console.log(response.data);
    setNewuser([...newuser,response.data])

    navigate("../")
    alert("Hello!! welcom");
  })
  
}


  return ( 
    <div className="logepag">
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-blocK"
              width="100%"
              height="480px"
              src={img1}
            ></img>
            <Carousel.Caption>
              <h1 className="logein">Signup</h1>
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
              <h1 className="logein">Signup</h1>
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
              <h1 className="logein">Signup</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* ----------------------------------------------------------------------------------------------- */}
      <div className="logeForm">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="loginput"
              type="email"
              placeholder="Enter email"
              onChange={(e)=>setEmail(e.target.value)} 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="loginput"
              type="password"
              placeholder="Password"
              onChange={(e)=>setPass(e.target.value)}
            />
          </Form.Group>
        </Form>
        <button className="buttonlogin" onClick={handlesub}>
        Signup
          </button>
        {/* -------------------------------------------------------------------------------------- */}
      </div>
      <Footer />
    </div>
  );
}
