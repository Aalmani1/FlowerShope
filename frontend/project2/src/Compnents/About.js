import React from "react";
import Carousel from "react-bootstrap/carousel";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.png";
import img3 from "./img/img3.jpg";
import Footer from "./Footer";

export default function About() {
  return (
    <div className="Aboutpag">
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
              <h1 className="ABOUT">ABOUT US</h1>
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
              <h1 className="ABOUT">ABOUT US</h1>
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
              <h1 className="ABOUT">ABOUT US</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="Aboutcard">
        <h1>A PERFECT SPOT</h1>
        <p>
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibe ndum auctor, nisi elit conse quat ipsu. Proin gravida
          nibh vel velit auctor ali quet. Aen ean sol lici tudin, lorem quis
          biben dum au.
        </p>
        <img src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h1-img-1.jpg" />
      </div>
      <Footer />
    </div>
  );
}
