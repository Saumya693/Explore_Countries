import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import world from "../assets/images/world.jpg";

const HeroSection = () => {
  return (
    <div>
      <main className="hero-section main mt-5">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="hero-content">
                <h1 className="heading-xl">
                  Explore the World, One Country at a Time.
                </h1>
                <p className="paragraph">
                  Discover the history, culture, and beauty of every nation.
                  Sort, search, and filter through countries to find the details
                  you
                </p>
                <button className="btn btn-darken btn-inline bg-white-box border">
                  Start Exploring <FaLongArrowAltRight />
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero-image">
                <img className="img-fluid" src={world} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
