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
        <div>
      <Router>
   <Nav className="justify-content-end" activeKey="/home">
     <Nav.Item>
       <Nav.Link ><Link exact to="/">Home</Link></Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link > <Link to="/About">About us</Link></Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link to="shop">shop</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link to="Cart" >
         <ShoppingCartIcone />
       </Nav.Link>
    </Nav.Item>
  </Nav> 

          
    {/* <Switch> */}
    < Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route path="/About" element={<About />}></Route>
    <Route path="Shop" element={<Shop />}></Route>
    <Route path="Cart" element={<Cart />}></Route>

    {/* <Route exact path="/" ><Home/></Route>
    <Route   path="/about" ><About/></Route>
    <Route   path="/shop"><Shop/></Route>
    <Route   path="/cart"><Cart/></Route> */}
    {/* </Switch> */}
    </Routes>
        </Router>
        </div>
    )
}
