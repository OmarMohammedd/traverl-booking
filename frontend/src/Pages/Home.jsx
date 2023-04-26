import React, { useEffect } from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png"

import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../Components/featured-tour/FeaturedTourList";
import MasonryimgesGallery from "../Components/image-galery/MasonryimgesGallery";
import Testimonial from "../Components/Testimonial/Testimonial";
import Newsletter from "../shared/Newsletter";


const Home = () => {

  useEffect(() => {
    window.scrollTo(0,0,)
 }, [])

  return (
    <>
      {/* ========== hero section start ========== */}
  <section>
    <Container>
      <Row>
        <Col lg="6">
          <div className="hero_content">
            <div className="hero_subtitle d-flex align-items-center">
              <Subtitle subtitle={"know Before You Go"} />
              <img src={worldImg} alt="" />
            </div>
            <h1>
              Traveling opens the door to creating
              <span className="hightlight"> memories</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, beatae voluptatum. Tempore, id. Ad architecto,
              recusandae in cupiditate facere nihil quidem tempora eligendi
              deleniti quo! Nemo magnam dignissimos cum enim!
            </p>
          </div>
        </Col>

        <Col lg="2">
          <div className="hero__img-box">
            <img src={heroImg} alt="" />
          </div>
        </Col>
        <Col lg="2">
          <div className="hero__img-box hero__video-box mt-4">
            <video src={heroVideo} controls />
          </div>
        </Col>
        <Col lg="2">
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt="" />
          </div>
        </Col>

        <SearchBar />
      </Row>
    </Container>
  </section>
      {/* ========== hero section end ========== */}

      <section>
         <Container>
            <Row>
               <Col lg='3'>
                  <h5 className="services__subtitle">What we serve</h5>
                  <h2 className="services__title">We offer our services</h2>
               </Col>
               <ServiceList/>
            </Row>
         </Container>
      </section>

      {/* ====== featured tour section start */}
         <section>
            <Container>
              <Row>
                <Col lg="12" className="mb-5">
                  <Subtitle subtitle={'Explore'}/>
                  <h2 className="featured__tour-title">
                    Our Featured tours
                  </h2>
                </Col>
                <FeaturedTourList/>
              </Row>
            </Container>
         </section>
      {/* ====== featured tour section end */}
      {/* ====== experience section start */}
       <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="experience__content">
                     <Subtitle subtitle={'Experience'}/>

                     <h2>With our all experience <br /> we will serve you</h2>
                     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      <br />
                       Est error beatae eos delectus harum temporibus voluptate.</p>
                  </div>
                  <div className="counter__wrapper d-flex align-items-center gap-5">
                    <div className="counter__box">
                        <span>12K+</span>
                        <h6>Successfull trip</h6>
                    </div>
                    <div className="counter__box">
                        <span>2K+</span>
                        <h6>Regular clients</h6>
                    </div>
                    <div className="counter__box">
                        <span>15K+</span>
                        <h6>Years experience</h6>
                    </div>
                  </div>
               </Col>
               <Col lg='6'>
                  <div className="experience__img">
                     <img src={experienceImg} alt="" />
                  </div>
               </Col>
            </Row>
         </Container>
       </section>
      {/* ====== experience section end */}
      {/* ====== gallery section start */}
        <section>
           <Container>
              <Row>
                 <Col lg='12'>
                    <Subtitle subtitle={"Gallery"}/>
                    <h2 className="gallery__title">Visit our customers tour gallery</h2>
                 </Col>
                 <Col lg='12'>
                    <MasonryimgesGallery/>
                 </Col>
              </Row>
           </Container>
        </section>
      {/* ====== gallery section end */}
      {/* ====== testimonial section start */}
        <section style={{overflowX: "hidden"}}>
           <Container>
             <Row>
               <Col lg='12'>
                 <Subtitle subtitle={"fans Love"}/>
                 <h2 className="testimonial__title">What our say about us</h2>
               </Col>
               <Col lg='12'>
                 <Testimonial/>
               </Col>
             </Row>
           </Container>
        </section>
      {/* ====== testimonial section end */}
      <Newsletter/>
    </>
  );
};

export default Home;
