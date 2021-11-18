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
  const [name, setName] = useState();
  const [img, setImg] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/flowers/items").then((res) => {
      // console.log(res.data);
      setFlower(res.data);
    });
  }, []);

  function updateItem(e, id) {
    e.preventDefault();
    setSaveID(id);
  }

  function putData(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:3001/flowers/admin/putFlowers`, {
        data: {
          id: saveId,
          name: name,
          img: img,
          description: description,
          price: price,
        },
      })

      .then((res) => {
        console.log(res);
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
                src={img1}
              ></img>

              <Carousel.Caption>
                <h1 class="prodectList">UPDATE FLAWER</h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        {
          //=================================== end header =======================================
        }

        <div className="AdminAddItem">
          <Form
            onSubmit={(e) => {
              putData(e);
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Flower ID: </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setSaveID(e.target.value);
                }}
                type="text"
                placeholder="Enter ID of the Flower"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name of Flower</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Enter Name of the Flower"
              />
            </Form.Group>

            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Flower Img</Form.Label>
              <Form.Control type="file" size="sm" />

              <Form.Control
                onChange={(e) => {
                  setImg(e.target.value);
                }}
                type="text"
                placeholder="Enter Flower Img"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                type="text"
                placeholder="Enter Flower Description"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Flower Price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
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