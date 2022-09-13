import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "../Gallery/Gallery.css";
import imgs from "../../jsonFiles/imgs.json";

const GallerySection = () => {
  let img2 =
    "https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=600";
  let img =
    "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600";
  return (
    <>
      <div className="gallery_container pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h1 className="gallery__heading">
                College <br /> Photo <br /> Gallery
              </h1>
              <p className="gallery__para">
                Here are a few of the special moments <br /> captured by our
                students.
              </p>
            </div>
            <div className="col-lg-3">
              <img className="gallery_img" src={img} alt="" />
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div
                  style={{
                    width: "100%",
                    height: "214px",
                  }}
                  className="col-lg-12"
                ></div>
                <div className="col-lg-12">
                  <img className="gallery_img3" src={img} alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6">
                  <img className="gallery_img2" src={img} alt="" />
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-12">
                      <img className="gallery_img" src={img} alt="" />
                    </div>
                    <div className="col-lg-12">
                      <img
                        style={{ marginTop: "30px" }}
                        className="gallery_img"
                        src={img}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="row"
              style={{
                marginTop: "30px",
              }}
            >
              <div className="col-lg-3">
                <img className="gallery_img" src={img} alt="" />
              </div>
              <div className="col-lg-6">
                <img style={{marginLeft:"20px"}} className="gallery_img5" src={img} alt="" />
              </div>
              <div className="col-lg-3">
                <img style={{marginLeft:"25px"}} className="gallery_img" src={img} alt="" />
              </div>
            </div>

            {imgs.map((img) => {
              return (
                <>
                  <div className="col-lg-3 dynamic__imgs">
                    <img
                      style={{ marginTop: "30px" }}
                      className="gallery_img"
                      src={img.img}
                      alt=""
                    />
                    <div className="gallery_heading">
                      <h1>Daksha</h1>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

function Gallery() {
  return (
    <div className="gallery">
      {/* <Header isDepartment={false} /> */}
      <GallerySection />
      {/* <Footer /> */}
    </div>
  );
}

export default Gallery;
