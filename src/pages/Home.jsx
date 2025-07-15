import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

import HeroSection from "../ui/HeroSection";
import About from "./About"; // ✅ added this line

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
    </>
  );
};

export default Home;
