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
            <Nav.Link>
              <Link to="/admin/GetDelete">Home / Delete</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/admin/AddItem">Add Flower</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/admin/UpdateItem">Update Flower</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item></Nav.Item>
        </Nav>

        <Routes>
          <Route exact path="/admin/GetDelete" element={<AdminHome />}></Route>
          <Route path="/admin/AddItem" element={<AddItem />}></Route>
          <Route path="/admin/UpdateItem" element={<UpdateItem />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
