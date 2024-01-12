import React from "react";
import NavbarHeader from "../pages/Navbar";
import FooterBfsg from "../pages/FooterBfsg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import SkinCare1 from "../Image/Fragrance/Aerin.png";
import SkinCare2 from "../Image/Fragrance/Aramis.png";
import SkinCare3 from "../Image/Fragrance/BYTERRY.png";
import SkinCare4 from "../Image/Fragrance/BYREDO.png";
import SkinCare5 from "../Image/Fragrance/DIPTYQUE.png";
import SkinCare6 from "../Image/Fragrance/MAISON.png";
import SkinCare7 from "../Image/Fragrance/VICTORIA.png";

import HeroBannerFrag from "../Image/Fragrance/FragranceBanner.png";

function Fragrance() {
  return (
    <div>
      <NavbarHeader />

      <section className="B3bPageTop Fragrance">
        <div className="container">
          <div className="HeroBanner">
            <img src={HeroBannerFrag} alt="" />
            <h3>Fragrance</h3>
          </div>

          <div>
            <div className="row g-0">
              <div className="col-lg-3 col-md-3 col-sm-6 ">
                <Link to="/brands/Aerin">
                  <div className="BrandProduct BR BB  ">
                    <div>
                      <img src={SkinCare1} alt="" />
                    </div>

                    <h2>AERIN</h2>
                  </div>
                </Link>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">
                <Link to="/brands/Aramis">
                  <div className="BrandProduct BR BB ">
                    <div>
                      <img src={SkinCare2} alt="" />
                    </div>

                    <h2>ARAMIS</h2>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <Link to="/brands/ByTerry">
                  <div className="BrandProduct BR BB">
                    <div>
                      <img src={SkinCare3} alt="" />
                    </div>

                    <h2>BY TERRY</h2>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <Link to="/brands/Byredo">
                  <div className="BrandProduct BB ">
                    <div>
                      <img src={SkinCare4} alt="" />
                    </div>

                    <h2>Byredo</h2>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <Link to="/brands/Diptyque">
                  <div className="BrandProduct   BR">
                    <div>
                      <img src={SkinCare5} alt="" />
                    </div>

                    <h2>Diptyque</h2>
                  </div>
                </Link>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">
                <Link to="/brands/MaisonMargiela">
                  <div className="BrandProduct BR ">
                    <div>
                      <img src={SkinCare6} alt="" />
                    </div>

                    <h2>Maison Margiela</h2>
                  </div>
                </Link>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">
                <Link to="/brands/VictoriaBeckhamBeauty">
                  <div className="BrandProduct BR ">
                    <div>
                      <img src={SkinCare7} alt="" />
                    </div>

                    <h2>Victoria Beckham Beauty</h2>
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

export default Fragrance;
