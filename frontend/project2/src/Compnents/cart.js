import Footer from "./Footer";
// export default function cart() {
//   return (
//     <div>
//       <Image width="100%" src={img5} fluid />
//       <Footer />
//     </div>
//   );
// }

import React from "react";
import img5 from "./img/img5.jpg";
import Carousel from "react-bootstrap/carousel";

export default function cart() {
  return (
    <div className="mother-cart">
      <h1>hi</h1>
      <div className="imgcart">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-blocK"
              width="100%"
              height="600px"
              src={img5}
            ></img>
            <Carousel.Caption>
              <h1 className="cart">
                <b>CART</b>
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="bill"></div>
      <Footer />
    </div>
  );
}
