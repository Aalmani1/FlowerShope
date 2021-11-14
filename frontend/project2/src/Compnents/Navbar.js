import React from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import ShoppingCartIcone from '@material-ui/icons/ShoppingCart'
import Home from './home'
import About from './About'
import Shop from './Shop'
import Cart from './cart'

export default function NavBar() {
    return (
        <div >
      <Router>
   <Nav className="justify-content-end" activeKey="/home">
     <Nav.Item>
       <Nav.Link ><Link exact to="/">Home</Link></Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link ><Link to="/About">About us</Link></Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link><Link to="/Shop">Shop</Link></Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link>
       <Link to="/Cart"><ShoppingCartIcone /></Link>
       </Nav.Link>
    </Nav.Item>
  </Nav> 

    < Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route path="/About" element={<About />}></Route>
    <Route path="/Shop" element={<Shop />}></Route>
    <Route path="/Cart" element={<Cart />}></Route>

    </Routes>
        </Router>
        </div>
    )
}
