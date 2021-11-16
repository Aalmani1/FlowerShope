import React from "react";
import Carousel from "react-bootstrap/carousel";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.png";
import img3 from "./img/img3.jpg";
import Iconhome from "./home/Iconhome";
import Homecard from "./home/Homecard";
import Footer from "./Footer";

export default function home() {
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
              <h1 className="hometitel">PERFECT BOUQUET</h1>
              <p>
                Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla
                vitae elit libero, a pharetra augue mollis interdum
              </p>
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
              <h1 className="hometitel">FLORIST'S DREAM</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae elit libero, a pharetra augue mollis interdum
              </p>
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
              <h1 className="hometitel">TIME TO BLOSSOM</h1>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                Nulla vitae elit libero, a pharetra augue mollis interdum
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <Iconhome />
      </div>
      <div>
        <Homecard />
      </div>

      <Footer />
    </div>
  );
}
