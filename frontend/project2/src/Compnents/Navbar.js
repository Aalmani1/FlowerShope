import React from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import ShoppingCartIcone from '@material-ui/icons/ShoppingCart'
import Home from './home'
import About from './About'
import Shop from './Shop'
import Cart from './Cart1'
import Logein from './Logein'
import Signup from './Signup'
export default function NavBar() {
    return (
        <div >
      <Router>
   <Nav className="justify-content-end" activeKey="/home">
     {/* <img className="logo" src="https://t4.ftcdn.net/jpg/03/14/56/35/360_F_314563555_mZkinERKSsTWJoagxvnj1Rn7PAI9egIH.jpg" /> */}
     <Nav.Item>
       <Link className="navItem" exact="true" to="/">Home</Link>
     </Nav.Item>
     <Nav.Item>
      <Link className="navItem" to="/About">About us</Link>
     </Nav.Item>
     <Nav.Item>
       <Link className="navItem" to="/Shop">Shop</Link>
     </Nav.Item>
     <Nav.Item>
      <Link className="navItem" to="/Logein">Logein</Link>
     </Nav.Item>
     <Nav.Item>
      <Link className="navItem" to="/Signup">Signup</Link>
     </Nav.Item>
     <Nav.Item>
       <Link className="navItem" to="/Cart"><ShoppingCartIcone className="masha" /></Link>
    </Nav.Item>
  </Nav> 

    < Routes>
    <Route exact="true" path="/" element={<Home />}></Route>
    <Route path="/About" element={<About />}></Route>
    <Route path="/Shop" element={<Shop />}></Route>
    <Route path="/Cart" element={<Cart />}></Route>
    <Route path="/Logein" element={<Logein />}></Route>
    <Route path="/Signup" element={<Signup />}></Route>

    </Routes>
        </Router>
        </div>
    )
}
