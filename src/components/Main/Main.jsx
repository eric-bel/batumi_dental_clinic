import React from "react";
import "tw-elements";
import About from "./About/About";
import Carousel from "./Carousel/Carousel";
import ServicesDent from "./ServicesDent/ServicesDent";

const Main = () => {
  return (
    <main>
      <Carousel />
      <About />
      <ServicesDent />
    </main>
  );
};

export default Main;
