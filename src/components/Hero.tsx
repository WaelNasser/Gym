/** @format */

import React from "react";
import HeroSlide from "./HeroSlide";

const Hero = () => {
  return (
    <div className="h-[100vh] lg:h-[912px] bg-hero object-contain bg-center bg-no-repeat bg-cover" id="home">
      <div className="container mx-auto h-full"><HeroSlide /></div>
      
    </div>
  );
};

export default Hero;
