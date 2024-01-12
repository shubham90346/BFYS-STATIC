import React from "react";
import NavbarHeader from "../pages/Navbar";
import { Link } from "react-router-dom";
// import BrandsOfB2b from "../pages/BrandsOfB2b";
import FooterBfsg from "../pages/FooterBfsg";
import "bootstrap/dist/css/bootstrap.min.css";

import Smasgbox from "../Image/Smasgbox.png";
import Img1 from "../Image/RMSBEAUTY.png";
import Img2 from "../Image/REVIVEw.png";
import Img3 from "../Image/DEPTYQUE.png";
import Img4 from "../Image/BYREDOB2b.png";
import Img5 from "../Image/BYTERRYB2b.png";
import Img6 from "../Image/KevynAucoin.png";
import Img7 from "../Image/07.png";
import Img8 from "../Image/08.png";
import Img9 from "../Image/09.png";
import Img10 from "../Image/10.png";
import Img11 from "../Image/11.png";
import Img12 from "../Image/12.png";
import Img13 from "../Image/13.png";
import Img14 from "../Image/14.png";
import Img15 from "../Image/15.png";

function BrandsAll() {
  return (
    <div>
      <NavbarHeader />

      <section className="B3bPageTop">
        <div className="container">
          <div>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 p-0">
                <Link to="Smashbox">
                  <div className="BrandProduct BR BB  ">
                    <div>
                      <img src={Smasgbox} alt="" />
                    </div>
                    <h2>L'Occitane SMASHBOX</h2>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 p-0">
                <Link to="RMSBeauty">
                  <div className="BrandProduct BR BB ">
                    <div>
                      <img src={Img1} alt="" />
                    </div>
                    <h2>RMS BEAUTY</h2>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 p-0">
                <Link to="ReVive">
                  <div className="BrandProduct BR BB">
                    <div>
                      <img src={Img2} alt="" />
                    </div>
                    <h2>REVIVE</h2>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 p-0">
                <Link to="Diptyque">
                  <div className="BrandProduct BB ">
                    <div>
                      <img src={Img3} alt="" />
                    </div>
                    <h2>DiPTYQUE</h2>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 p-0">
                <Link to="Byredo">
                  <div className="BrandProduct  BB BR">
                    <div>
                      <img src={Img4} alt="" />
                    </div>
                    <h2>BYREDO</h2>
                  </div>
                </Link>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 p-0">
                <Link to="ByTerry">
                  <div className="BrandProduct BB BR">
                    <div>
                      <img src={Img5} alt="" />
                    </div>
                    <h2>BY TERRY</h2>
                  </div>
                </Link>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 p-0">
                <Link to="KevynAucoin">
                  <div className="BrandProduct BB BR">
                    <div>
                      <img src={Img6} alt="" />
                    </div>
                    <h2>Kevyn-Aucoin</h2>
                  </div>
                </Link>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 p-0">
                <Link to="EsteeLaunder">
                  <div className="BrandProduct BB">
                    <div>
                      <img src={Img7} alt="" />
                    </div>
                    <h2>Estee Lauder</h2>
                  </div>
                </Link>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 p-0">
                <Link to="BobbiBrown">
                  <div className="BrandProduct  BR">
                    <div>
                      <img src={Img8} alt="" />
                    </div>
                    <h2>Bobbi Brown</h2>
                  </div>
                </Link>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 p-0">
                <Link to="MaisonMargiela">
                  <div className="BrandProduct  BR">
                    <div>
                      <img src={Img9} alt="" />
                    </div>
                    <h2>Maison Margiela</h2>
                  </div>
                </Link>
              </div>

              {/* <div className="col-lg-3 col-md-3 col-sm-6 p-0">
                <Link to="Aerin">
                  <div className="BrandProduct BB BR">
                    <div>
                      <img src={Img10} alt="" />
                    </div>
                    <h2>Aerin</h2>
                  </div>
                </Link>
              </div> */}

              {/* <div className="col-lg-3 col-md-3 col-sm-6 p-0">
                <Link to="Aramis">
                  <div className="BrandProduct BB">
                    <div>
                      <img src={Img11} alt="" />
                    </div>
                    <h2>Aramis</h2>
                  </div>
                </Link>
              </div> */}
              {/* <div className="col-lg-3 col-md-3 col-sm-6 p-0">
                <Link to="ReNutrive">
                  <div className="BrandProduct BR">
                    <div>
                      <img src={Img14} alt="" />
                    </div>
                    <h2>re-Nutrive</h2>
                  </div>
                </Link>
              </div> */}
              <div className="col-lg-3 col-md-3 col-sm-6 p-0">
                <Link to="VictoriaBeckhamBeauty">
                  <div className="BrandProduct BR ">
                    <div>
                      <img src={Img15} alt="" />
                    </div>
                    <h2>Victoria Beckham beauty</h2>
                  </div>
                </Link>
              </div>
              {/* <div className="col-lg-3 col-md-3 col-sm-6 p-0">
                <Link to="SusanneKaufmann">
                  <div className="BrandProduct BR">
                    <div>
                      <img src={Img13} alt="" />
                    </div>
                    <h2>Susanne kaufmann</h2>
                  </div>
                </Link>
              </div> */}
              <div className="col-lg-3 col-md-3 col-sm-6 p-0">
                <Link to="BumbleAndBumble">
                  <div className="BrandProduct ">
                    <div>
                      <img src={Img12} alt="" />
                    </div>
                    <h2>Bumble and bumble</h2>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <BrandsOfB2b/> */}

      <FooterBfsg />
    </div>
  );
}

export default BrandsAll;
