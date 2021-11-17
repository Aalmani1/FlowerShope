import imgFooter1 from "./img/footerimg.PNG";
import imgFooter2 from "./img/footerimg2.PNG";
function Footer() {
  return (
    <div style={{ background: " #262626" }}>
      <div className="mt-5 pt-5 pb-5 footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xs-12 text-white">
              <h4>Flowe Shop</h4>
              <br />
              <hr></hr>
              <p className="pr-5 text-white-50">
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitu
                din, lorem quistix bibendum auctoris
              </p>
              <img className="imgFooter" src={imgFooter1} alt="..." />
              <img className="imgFooter" src={imgFooter2} alt="..." />
              <p></p>
            </div>
            <div className="col-lg-3 col-xs-12 links">
              <h4 className="mt-lg-0 mt-sm-3 text-white">WORKING HOURS</h4>
              <br />
              <hr className="text-white-50"></hr>
              <p className=" text-white-50">Monday : 10AM – 9PM</p>
              <p className=" text-white-50">Tuesday : 10AM – 9PM</p>
              <p className=" text-white-50">Wednesday : 10AM – 9PM</p>
              <p className=" text-white-50">Thursday : 10AM – 9PM </p>
              <p className=" text-white-50">Friday : 10AM – 9PM</p>
              <p className=" text-white-50">Saturday : 10AM – 5PM</p>
              <p className=" text-white-50">Sunday : Closed</p>
            </div>
            <div className="col-lg-4 col-xs-12 location">
              <h4 className="mt-lg-0 mt-sm-4 text-white">Location</h4>
              <br />
              <hr className="text-white-50"></hr>
              <p className=" text-white-50">
                22, Lorem ipsum dolor, consectetur adipiscing
              </p>
              <p className="mb-0  text-white-50">
                <i className="fa fa-phone mr-3 text-white-50"></i>(541) 754-3010
              </p>
              <p>
                <i className="fa fa-envelope-o mr-3"></i>info@hsdf.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
