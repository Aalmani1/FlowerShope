import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Row, Col, Button } from "react-bootstrap";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.png";
import img3 from "./img/img3.jpg";

export default function Shop() {
  const [flower, setFlower] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/flowers/items").then((res) => {
      console.log(res.data);
      setFlower(res.data);
    });
    // console.log(flower);
  }, []);

  function addToCart() {
    console.log("add to cart");
  }

  return (
    <div className="home">
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-blocK"
              width="100%"
              height="580px"
              src={img1}
            ></img>
            <Carousel.Caption>
              <h1>PRODECT LIST</h1>
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
              <h1>PRODECT LIST</h1>
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
              <h1>PRODECT LIST</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-4" style={{ margin: " 9%" }}>
        {flower.map((item) => {
          return (
            <div class="col">
              <div class="card h-100">
                <img src={item.img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{item.name}</h5>
                  <small class="text-muted">Price : {item.price}</small>
                </div>
                <Button variant="dark" onClick={addToCart}>
                  Add To Cart
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
