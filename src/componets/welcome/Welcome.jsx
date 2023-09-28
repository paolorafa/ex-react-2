import React from "react";
import "./Welcome.css";
import Myimg from "../../assets/hero-img.png";
import Navigation from "../navbar/Navigation";


const Welcome = () => {
  return (
    <>
      <Navigation />

      <div
        class="container-fluids d-flex justify-content-center my-bg mb-2 mt-2"
        
      >
        <div class="row h-100 d-flex justify-content-center align-items-center mx-5">
          <div class="col-12 col-md-6 my-custom-query">
            <div class="text-white text-center">
              <h1 className="title">EpicBook</h1>
              <p class="" style={{ fontsize: "10px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                quasi iste ducimus fugit! Quasi corrupti numquam beatae
                excepturi tenetur modi, magni laudantium corporis suscipit
                deleniti odit molestiae incidunt neque enim!
              </p>
            </div>

          </div>

          <div class="col-12 col-md-6  my-custom-query">
            <img src={Myimg} alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
