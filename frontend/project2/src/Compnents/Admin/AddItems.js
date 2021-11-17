import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Row, Col, Button, Form } from "react-bootstrap";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.png";
import img3 from "../img/img3.jpg";

function AddItem() {
  const [flower, setFlower] = useState([]);
  useEffect(() => {
    axios.get("/admin/postFlowers").then((res) => {
      console.log(res.data);
      setFlower(res.data);
    });
  }, []);

  function add(e) {
    e.preventDefault();
    // console.log(e.target[0].value);
    console.log(e);
    let name = e.target[0].value;
    let img = e.target[1].value;
    let description = e.target[2].value;
    let price = e.target[2].value;

    axios
      .post("/flowers/admin/postFlowers", {
        data: { name: name, img: img, description: description, price: price },
      })
      .then((res) => {
        console.log("add suc" + res);
        setFlower([...flower, res.data]);
      });

    alert("Add Sucsesfull");
  }

  return (
    <div>
      <div className="home">
        <div>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-blocK"
                width="100%"
                height="580px"
                src={img3}
              ></img>
              <Carousel.Caption>
                <h1 class="prodectList">ADD FLAWER</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                width="100%"
                height="580px"
                src={img2}
              ></img>

              <Carousel.Caption>
                <h1 class="prodectList">ADD FLAWER</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                width="100%"
                height="580px"
                src={img1}
              ></img>

              <Carousel.Caption>
                <h1 class="prodectList">ADD FLAWER</h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="AdminAddItem">
          <Form
            onSubmit={(e) => {
              add(e);
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name of Flower</Form.Label>
              <Form.Control type="text" placeholder="Enter Name of Flower" />
            </Form.Group>

            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Flower Img</Form.Label>
              <Form.Control type="file" size="sm" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Flower Description"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Enter Flower Price" />
            </Form.Group>

            <Button className="logbutton" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
