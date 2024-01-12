import React from "react";
import NavbarHeader from "../pages/Navbar";
import FooterBfsg from "../pages/FooterBfsg";
import "bootstrap/dist/css/bootstrap.min.css";
import SkinCare1 from "../Image/HairCare/BumbleB.png";
import HeroBannerHair from "../Image/HairCare/HairCareBanner.png";
import { Link } from "react-router-dom";

function Haircare() {
  return (
    <div>
      <NavbarHeader />

      <section className="B3bPageTop HairCare">
        <div className="container">
          <div className="HeroBanner">
            <img src={HeroBannerHair} alt="" />
            <h3>HairCare</h3>
          </div>

          <div>
            <div className="row g-0">
              <div className="col-lg-3 col-md-3 col-sm-6 ">
              <Link to="/brands/BumbleAndBumble">
                  <div className="BrandProduct BR   ">
                    <div>
                      <img src={SkinCare1} alt="" />
                    </div>

                    <h2>Bumble and Bumble</h2>
                  </div>
                  </Link>
              </div>

             
            </div>
          </div>
        </div>
      </section>

      <FooterBfsg />
    </div>
  );
}

export default Haircare;
