import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import ShoppingCartIcone from "@material-ui/icons/ShoppingCart";
import Home from "../home";
import Logein from "../Logein";
import AddItem from "./AddItems";
import UpdateItem from "./UpdateItem";
import AdminHome from "./AdminHome";
import { useParams } from "react-router-dom";
export default function AdminNavbar() {
  const params = useParams();
  console.log("----->", params);
  return (
    <div>
      <Router>
        <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link>
              <Link className="navItem" to="/admin/GetDelete">Home / Delete</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link className="navItem" to="/admin/AddItem">Add Flower</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link className="navItem" to="/admin/UpdateItem">Update Flower</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item></Nav.Item>
        </Nav>

        <Routes>
          <Route
            exact="true"
            path="/admin/GetDelete"
            element={<AdminHome />}
          ></Route>
          <Route path="/admin/AddItem" element={<AddItem />}></Route>
          <Route path="/admin/UpdateItem" element={<UpdateItem />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
