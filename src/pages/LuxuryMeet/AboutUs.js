import React from 'react'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Luximg from '../../Image/About Page Image.png'
import NavbarHeader from "../Navbar"
import FooterBfsg from "../FooterBfsg"

function AboutUs() {
  return (
    
    <div>
      <NavbarHeader/>
        <section>

        <Container>
                <div className='row'>
                    <div className="col-lg-5 col-md-6 col-sm-12 m-auto">
                    <div className="LuxContent">
                        <h2 className='mb30'>Welcome to Beauty Fashion Sales Group - Where Luxury Meets Convenience</h2>

                        <p className='mb30 '>Indulge in the world of opulence without hopping between multiple websites. At BFSG, we curate an exquisite collection of the finest beauty and fashion brands from various exclusive sources. Imagine discovering your favorite luxury skincare, makeup, and fashion labels all in one place, without the hassle of navigating numerous online stores.</p>
                      
                        <p className=''>Together we elevate beauty to an art form, where skincare and makeup become the essence for enhancing your natural allure and showcasing your individuality in the most exquisite manner.</p>
                         </div>
                         </div>

                     <div className="col-lg-7 col-md-6 col-sm-12 m-auto">
                    <div className="LuxImage">
                        <img src ={Luximg} alt="luxury"/>
                          
                         </div>
                         <div/>
                </div>
                </div>
                </Container>
        </section>
        <FooterBfsg/>

    </div>
  )
}

export default AboutUs