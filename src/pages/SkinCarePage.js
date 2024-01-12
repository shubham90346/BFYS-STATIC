import React from "react";
import NavbarHeader from "../pages/Navbar";
import FooterBfsg from "../pages/FooterBfsg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import SkinCare1 from "../Image/SkinCare/RMSBEAUTY.png";
import SkinCare2 from "../Image/SkinCare/REVIVE.png";
import SkinCare3 from "../Image/SkinCare/SMASHBOX.png";
import BobbiBrown from "../Image/BobbiBrownSkincare.png";
import SkinCare4 from "../Image/SkinCare/BY TERRY.png";
import SkinCare5 from "../Image/SkinCare/Kevyn-Aucoin.png";
import SkinCare6 from "../Image/SkinCare/Estee Lauder.png";
import SkinCare7 from "../Image/SkinCare/Byredo.png";
import SkinCare8 from "../Image/SkinCare/Maison.png";
import HeroBanner from "../Image/SkinCare/SkincareBanner.png";
function Skincare() {
  return (
    <div>
      <NavbarHeader />
      <div>
        <section className="B3bPageTop">
          <div className="container">
            <div className="HeroBanner">
              <img src={HeroBanner} alt="" />
              <h3>SKINCARE</h3>
            </div>

            <div>
              <div className="row g-0">
                {/* <div className="col-lg-3 col-md-3 col-sm-6 ">
                  <Link to="/brands/Smashbox">
                    <div className="BrandProduct BR BB  ">
                      <div>
                        <img src={SkinCare3} alt="" />
                      </div>

                      <h2>SMASHBOX</h2>
                    </div>
                  </Link>
                </div> */}

                <div className="col-lg-3 col-md-3 col-sm-6">
                  <Link to="/brands/RMSBeauty">
                    <div className="BrandProduct BR BB ">
                      <div>
                        <img src={SkinCare1} alt="" />
                      </div>

                      <h2>RMS BEAUTY</h2>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <Link to="/brands/ReVive">
                    <div className="BrandProduct BR BB">
                      <div>
                        <img src={SkinCare2} alt="" />
                      </div>

                      <h2>REVIVE</h2>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <Link to="/brands/BobbiBrown">
                    <div className="BrandProduct BB BR ">
                      <div>
                        <img src={BobbiBrown} alt="" />
                      </div>

                      <h2>Bobbi Brown</h2>
                    </div>
                  </Link>
                </div>
                {/* <div className="col-lg-3 col-md-3 col-sm-6">
                  <Link to="/brands/Byredo">
                    <div className="BrandProduct   BR BB">
                      <div>
                        <img src={SkinCare7} alt="" />
                      </div>

                      <h2>BYREDO</h2>
                    </div>
                  </Link>
                </div> */}

                <div className="col-lg-3 col-md-3 col-sm-6">
                  <Link to="/brands/ByTerry">
                    <div className="BrandProduct   BB">
                      <div>
                        <img src={SkinCare4} alt="" />
                      </div>

                      <h2>BY TERRY</h2>
                    </div>
                  </Link>
                </div>

                {/* <div className="col-lg-3 col-md-3 col-sm-6">
                  <Link to="/brands/KevynAucoin">
                    <div className="BrandProduct  BR BB">
                      <div>
                        <img src={SkinCare5} alt="" />
                      </div>

                      <h2>Kevyn-Aucoin</h2>
                    </div>
                  </Link>
                </div> */}

                <div className="col-lg-3 col-md-3 col-sm-6">
                  <Link to="/brands/EsteeLaunder">
                    <div className="BrandProduct BR ">
                      <div>
                        <img src={SkinCare6} alt="" />
                      </div>

                      <h2>ESTEE LAUDER</h2>
                    </div>
                  </Link>
                </div>

                {/* <div className="col-lg-3 col-md-3 col-sm-6">
                  <Link to="/brands/MaisonMargiela">
                    <div className="BrandProduct BR">
                      <div>
                        <img src={SkinCare8} alt="" />
                      </div>

                      <h2>Maison Margiela</h2>
                    </div>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>

      <FooterBfsg />
    </div>
  );
}

export default Skincare;
