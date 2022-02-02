import React from "react";
import "tw-elements";
import About from "./About/About";
import Carousel from "./Carousel/Carousel";
import Choice from "./Choice/Choice";
import ServicesDent from "./ServicesDent/ServicesDent";

const Main = () => {
 
  return (
    <main>
      <Carousel />
      <About />
      <ServicesDent />
      {/* <Choice /> */}
    </main>
  );
};

export default Main;
