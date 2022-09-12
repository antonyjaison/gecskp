import React, { useContext } from "react";
import "../Banner/Banner.css";
import Media from "react-media";
import { LanguageContext } from "../../Context/LanguageContext";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bgImg1 from "../Banner/background_image.png";
import bgImg2 from "../Banner/Assosiation_Day.png";
import bgImg3 from "../Banner/Daksha.png";
import bgImg4 from "../Banner/IT.jpg";
import Line from "../Line/Line";

function Banner(props) {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <>
      <div className="carousel_wrapper">
        <div className="announcement_banner announcement_banner_blur">
          <div className="blur_headings">
            <h1 className="mb-3">Announcements</h1>
          </div>

          <div className="announcement_scroll">
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              esse.
            </p>
            <div className="header_announcement_line"></div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              esse.
            </p>
            <div className="header_announcement_line"></div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              esse.
            </p>
            <div className="header_announcement_line"></div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              esse.
            </p>
            <div className="header_announcement_line"></div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              esse.
            </p>
            <div className="header_announcement_line"></div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              esse.
            </p>
            <div className="header_announcement_line"></div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              esse.
            </p>
            <div className="header_announcement_line"></div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              esse.
            </p>
            <div className="header_announcement_line"></div>
          </div>
        </div>

        <Carousel
          autoPlay={true}
          showStatus={false}
          emulateTouch={true}
          infiniteLoop={true}
          showThumbs={false}
        >
          <div className="carousel">
            <img className="carousel_main_img" src={bgImg1} />
            <div className="carousel_details">
              <div className="carousel_details_section text-start">
                <h1 className="">
                  Government Engineering College, Palakkad, <br /> Sreekrishnapuram
                </h1>

                <h4>
                  <span>
                    Vision : <br />{" "}
                  </span>
                  <i>
                    {" "}
                    Excellence through the wings of science and technology.
                  </i>
                </h4>

                <h4>
                  <span>
                    Mission : <br />
                  </span>
                  <i>
                    To transform youth to talented engineers with creativity and
                    integrity who can meet the technological challenges for the
                    service of society.
                  </i>
                </h4>
              </div>
            </div>
          </div>

          <div className="carousel">
            <img className="carousel_img" src={bgImg2} />
            <div className="carousel_details_div">
              <div className="carousel_headings">
                <h2>Assosiation Day</h2>
              </div>
            </div>
          </div>

          <div className="carousel">
            <img className="carousel_img" src={bgImg4} />
            <div className="carousel_details_div"></div>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Banner;