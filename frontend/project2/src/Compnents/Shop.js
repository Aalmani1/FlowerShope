
import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/carousel";
import { Button } from "react-bootstrap";
import Footer from "./Footer";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.png";
import img3 from "./img/img3.jpg";
import { useDispatch } from "react-redux";
import { addcart } from "./redux/cart/cartitem";

export default function Shop() {
  const [flower, setFlower] = useState([]);
  const dispatch =useDispatch()



  useEffect(() => {
    axios.get("http://localhost:3001/flowers/items").then((res) => {
      console.log(res.data);
      setFlower(res.data);
    });
    // console.log(flower);
  }, []);

  const addToCart = (item) => {
    // console.log("add to cart");
    dispatch(addcart(item))

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
              <h1 className="prodectList">PRODECT LIST</h1>
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
              <h1 className="prodectList">PRODECT LIST</h1>
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
              <h1 className="prodectList">PRODECT LIST</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4" style={{ margin: " 9%" }}>
        {flower.map((item) => {
          return (
            <div className="col">
              <div className="card h-100">
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <small className="text-muted">Price : ${item.price}</small>
                </div>
                <Button  variant="dark" onClick={() =>addToCart(item)}>
                  Add To Cart
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

