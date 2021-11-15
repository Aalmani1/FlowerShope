import imgFooter1 from "./img/footerimg.PNG";
import imgFooter2 from "./img/footerimg2.PNG";
function Footer() {
  return (
    <div style={{ background: " #262626" }}>
      <div class="mt-5 pt-5 pb-5 footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-xs-12 text-white">
              <h4>Flowe Shop</h4>
              <br />
              <hr></hr>
              <p class="pr-5 text-white-50">
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitu
                din, lorem quistix bibendum auctoris
              </p>
              <img class="imgFooter" src={imgFooter1} alt="..." />
              <img class="imgFooter" src={imgFooter2} alt="..." />
              <p></p>
            </div>
            <div class="col-lg-3 col-xs-12 links">
              <h4 class="mt-lg-0 mt-sm-3 text-white">WORKING HOURS</h4>
              <br />
              <hr class="text-white-50"></hr>
              <p class=" text-white-50">Monday : 10AM – 9PM</p>
              <p class=" text-white-50">Tuesday : 10AM – 9PM</p>
              <p class=" text-white-50">Wednesday : 10AM – 9PM</p>
              <p class=" text-white-50">Thursday : 10AM – 9PM </p>
              <p class=" text-white-50">Friday : 10AM – 9PM</p>
              <p class=" text-white-50">Saturday : 10AM – 5PM</p>
              <p class=" text-white-50">Sunday : Closed</p>
            </div>
            <div class="col-lg-4 col-xs-12 location">
              <h4 class="mt-lg-0 mt-sm-4 text-white">Location</h4>
              <br />
              <hr class="text-white-50"></hr>
              <p class=" text-white-50">
                22, Lorem ipsum dolor, consectetur adipiscing
              </p>
              <p class="mb-0  text-white-50">
                <i class="fa fa-phone mr-3 text-white-50"></i>(541) 754-3010
              </p>
              <p>
                <i class="fa fa-envelope-o mr-3"></i>info@hsdf.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
