import React, { useEffect, useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Terry from "../Image/B2B-Website-UI/new-Arrival-bobbi-brown.png";
import Victoria from "../Image/B2B-Website-UI/new-Arrival-Debtuque.png";
import youngBredo from "../Image/B2B-Website-UI/youngBredo.png";
import NewArriwal04 from "../Image/B2B-Website-UI/04.png";
import NewArriwal05 from "../Image/B2B-Website-UI/05.png";
import NewArriwal06 from "../Image/B2B-Website-UI/06.png";
import NewArriwal07 from "../Image/B2B-Website-UI/07.png";
import NewArriwal08 from "../Image/B2B-Website-UI/08.png";
import NewArriwal09 from "../Image/B2B-Website-UI/09.png";

import { Link as ScrollLink } from "react-scroll";
function Sliderr() {
  const scrollTop = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 2800
        ? (scrollTop.current.style.display = "inline-block")
        : (scrollTop.current.style.display = "none");
    });
  }, []);

  const options = {
    loop: true,
    margin: 50,
    nav: true,
    dots: false,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" width="42" height="13" viewBox="0 0 42 13" fill="none">' +
        '<path d="M0.357289 6.71437L9.62174 12.273C10.155 12.593 10.8333 12.2089 10.8333 11.587L10.8333 1.41296C10.8333 0.79112 10.155 0.407029 9.62174 0.72696L0.357289 6.28563C0.195455 6.38273 0.195455 6.61727 0.357289 6.71437Z" fill="#7F7F7F"/>' +
        '<path d="M10.8333 6.5L41.1667 6.5" stroke="#7F7F7F" stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg>",
      '<svg xmlns="http://www.w3.org/2000/svg" width="43" height="13" viewBox="0 0 43 13" fill="none">' +
        '<path d="M41.8093 6.28563L32.5449 0.726957C32.0117 0.407025 31.3333 0.791116 31.3333 1.41295L31.3333 11.587C31.3333 12.2089 32.0117 12.593 32.5449 12.273L41.8093 6.71437C41.9712 6.61727 41.9712 6.38273 41.8093 6.28563Z" fill="#7F7F7F"/>' +
        '<path d="M31.3333 6.5L0.999975 6.5" stroke="#7F7F7F" stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="newarrivals" className="NewArriavalsList">
      <Container>
        <h3>New Arrivals</h3>

        <OwlCarousel className="owl-theme" {...options}>
          <div class="item">
            <div>
              <div className="ArriavalsInnerContent">
                <h4>Bobbi Brown</h4>
                <p>
                Soothing Cleansing Oil Upgrade
                </p>

                <a href="https://b2b-v3.vercel.app/#/login">
                  Shop The Collection
                </a>
                <div className="fitContent">
                  <img src={Terry} />
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="ArriavalsInnerContent">
                <h4>Diptyque</h4>
                <p>
                Fleur de Peau Hair MistŚ
                </p>
                <a href="https://b2b-v3.vercel.app/#/login">
                  Shop The Collection
                </a>
                <div className="fitContent">
                  <img src={Victoria} />
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="ArriavalsInnerContent">
                <h4>Byredo</h4>
                <p>
                  Byredo is a European luxury brand founded in Stockholm in 2006
                  by Ben Gorham, with an ambition to translate memories{" "}
                </p>
                <a href="https://b2b-v3.vercel.app/#/login">
                  Shop The Collection{" "}
                </a>
                <div className="fitContent">
                  <img src={youngBredo} />
                </div>
              </div>
            </div>
          </div> 
          <div class="item">
            <div>
              <div className="ArriavalsInnerContent">
                <h4>RMS Beauty</h4>
                <p>
                ReDimension Hydra Dew Luminizer
                </p>
                <a href="https://b2b-v3.vercel.app/#/login">
                  Shop The Collection{" "}
                </a>
                <div className="fitContent">
                  <img src={NewArriwal04} />
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="ArriavalsInnerContent">
                <h4>Bumble and Bumble</h4>
                <p>
                Illuminated Color 1-Minute Vibrancy Treatment
                </p>
                <a href="https://b2b-v3.vercel.app/#/login">
                  Shop The Collection{" "}
                </a>
                <div className="fitContent">
                  <img src={NewArriwal05} />
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="ArriavalsInnerContent">
                <h4>By Terry</h4>
                <p>
                Hyaluronic Glow Setting Mist
                </p>
                <a href="https://b2b-v3.vercel.app/#/login">
                  Shop The Collection{" "}
                </a>
                <div className="fitContent">
                  <img src={NewArriwal06} />
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="ArriavalsInnerContent">
                <h4>Kevyyn Aucoin</h4>
                <p>
                Velvet Lip Paint
                </p>
                <a href="https://b2b-v3.vercel.app/#/login">
                  Shop The Collection{" "}
                </a>
                <div className="fitContent">
                  <img src={NewArriwal07} />
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="ArriavalsInnerContent">
                <h4>Revive</h4>
                <p>
                Fermitif Chin Contour Instant Tightening Peptide Mask
                </p>
                <a href="https://b2b-v3.vercel.app/#/login">
                  Shop The Collection{" "}
                </a>
                <div className="fitContent">
                  <img src={NewArriwal08} />
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="ArriavalsInnerContent">
                <h4>Smashbox</h4>
                <p>
                On Skin Balancing Foundation
                </p>
                <a href="https://b2b-v3.vercel.app/#/login">
                  Shop The Collection{" "}
                </a>
                <div className="fitContent">
                  <img src={NewArriwal09} />
                </div>
              </div>
            </div>
          </div>
        
         
         
         
          
        </OwlCarousel>
      </Container>
    </div>
  );
}

export default Sliderr;
