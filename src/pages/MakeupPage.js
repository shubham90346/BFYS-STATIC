import React from "react";
import NavbarHeader from "../pages/Navbar";
import FooterBfsg from "../pages/FooterBfsg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import SkinCare1 from "../Image/MAKEUP/BobbiBro.png";
import SkinCare2 from "../Image/MAKEUP/TERRY.png";
import SkinCare3 from "../Image/MAKEUP/LAUDER.png";
import SkinCare4 from "../Image/MAKEUP/KEVYN.png";
import SkinCare7 from "../Image/SkinCare/RMSBEAUTY.png";

import SkinCare6 from "../Image/MAKEUP/Smashbox.png";
import HeroBannerMakeup from "../Image/MAKEUP/MakeUpBanner.png";

function Makeup() {
  return (
    <div>
      <NavbarHeader />

      <section className="B3bPageTop Makeup">
        <div className="container">
          <div className="HeroBanner">
            <img src={HeroBannerMakeup} alt="" />
            <h3>Makeup</h3>
          </div>

          <div>
            <div className="row g-0">
              <div className="col-lg-3 col-md-3 col-sm-6 ">
              <Link to="/brands/BobbiBrown">
                  <div className="BrandProduct BR BB  ">
                    <div>
                      <img src={SkinCare1} alt="" />
                    </div>

                    <h2>Bobbi Brown</h2>
                  </div>
                  </Link>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">
              <Link to="/brands/ByTerry">
                  <div className="BrandProduct BR BB ">
                    <div>
                      <img src={SkinCare2} alt="" />
                    </div>

                    <h2>BY TERRY</h2>
                  </div>
                  </Link>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
              <Link to="/brands/EsteeLaunder">
                  <div className="BrandProduct BR BB">
                    <div>
                      <img src={SkinCare3} alt="" />
                    </div>

                    <h2>ESTEE LAUDER</h2>
                  </div>
                  </Link>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
              <Link to="/brands/KevynAucoin">
                  <div className="BrandProduct BB ">
                    <div>
                      <img src={SkinCare4} alt="" />
                    </div>

                    <h2>Kevyn Aucoin Cosmetics</h2>
                  </div>
                  </Link>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
              <Link to="/brands/RMSBeauty">
                  <div className="BrandProduct   BR">
                    <div>
                      <img src={SkinCare7} alt="" />
                    </div>

                    <h2>RMS Beauty</h2>
                  </div>
                  </Link>
              </div>            

              <div className="col-lg-3 col-md-3 col-sm-6">
              <Link to="/brands/Smashbox">
                  <div className="BrandProduct BR ">
                    <div>
                      <img src={SkinCare6} alt="" />
                    </div>

                    <h2>Smashbox</h2>
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

export default Makeup;
