import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Row, Col, Button, Form } from "react-bootstrap";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.png";
import img3 from "../img/img3.jpg";

function UpdateItem() {
  const [flower, setFlower] = useState([]);
  const [saveId, setSaveID] = useState();

  function putData(e) {
    e.preventDefault();
    let title = e.target[0].value;
    let link = e.target[1].value;
    let description = e.target[2].value;
    axios
      .put(`http://localhost:3001/flowers/admin/putFlowers/${saveId}`, {
        data: { title: title, link: link, description: description },
      })

      .then((res) => {
        console.log(res.data);
        setFlower(res.data);
      });
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
                <h1 class="prodectList">UPDATE FLAWER</h1>
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
                <h1 class="prodectList">UPDATE FLAWER</h1>
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
                <h1 class="prodectList">UPDATE FLAWER</h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="AdminAddItem">
          <Form>
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

export default UpdateItem;
