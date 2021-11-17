import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import ShoppingCartIcone from "@material-ui/icons/ShoppingCart";
import Home from "../home";
import About from "../About";
import Shop from "../Shop";
import Cart from "../cart";
import Logein from "../Logein";
export default function AdminNavbar() {
  return (
    <div>
      <Router>
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
              <Link exact="true" to="/">
                Home
              </Link>
          </Nav.Item>
          <Nav.Item>
              <Link to="/admin/AddItem">Add Flower</Link>
          </Nav.Item>
          <Nav.Item>
              <Link to="/admin/updateItem">Update Flower</Link>
          </Nav.Item>
          <Nav.Item>
              <Link to="/admin/deleteItem">Delete Item</Link>
          </Nav.Item>
          <Nav.Item>
              <Link to="/Cart">
                <ShoppingCartIcone />
              </Link>
          </Nav.Item>
        </Nav>

        <Routes>
          <Route exact="true" path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Logein" element={<Logein />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
