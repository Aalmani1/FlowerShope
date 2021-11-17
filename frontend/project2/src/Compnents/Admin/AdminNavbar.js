import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import ShoppingCartIcone from "@material-ui/icons/ShoppingCart";
import Home from "../home";
import Logein from "../Logein";
import AddItem from "./AddItems";
import UpdateItem from "./UpdateItem";
import AdminHome from "./AdminHome";
export default function AdminNavbar() {
  return (
    <div>
      <Router>
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
<<<<<<< HEAD
              <Link exact="true" to="/">
                Home
              </Link>
=======
            <Nav.Link>
              <Link to="/admin/GetDelete">Home / Delete</Link>
            </Nav.Link>
>>>>>>> a946d09c247fcf1458c09600fc33e998174e5bf7
          </Nav.Item>
          <Nav.Item>
              <Link to="/admin/AddItem">Add Flower</Link>
          </Nav.Item>
          <Nav.Item>
<<<<<<< HEAD
              <Link to="/admin/updateItem">Update Flower</Link>
          </Nav.Item>
          <Nav.Item>
              <Link to="/admin/deleteItem">Delete Item</Link>
          </Nav.Item>
          <Nav.Item>
              <Link to="/Cart">
                <ShoppingCartIcone />
              </Link>
=======
            <Nav.Link>
              <Link to="/admin/UpdateItem">Update Flower</Link>
            </Nav.Link>
>>>>>>> a946d09c247fcf1458c09600fc33e998174e5bf7
          </Nav.Item>
          <Nav.Item></Nav.Item>
        </Nav>

        <Routes>
<<<<<<< HEAD
          <Route exact="true" path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Logein" element={<Logein />}></Route>
=======
          <Route exact path="/admin/GetDelete" element={<AdminHome />}></Route>
          <Route path="/admin/AddItem" element={<AddItem />}></Route>
          <Route path="/admin/UpdateItem" element={<UpdateItem />}></Route>
>>>>>>> a946d09c247fcf1458c09600fc33e998174e5bf7
        </Routes>
      </Router>
    </div>
  );
}
