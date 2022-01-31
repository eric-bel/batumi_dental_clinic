import React from "react";
import "tw-elements";
import About from "./About/About";
import Carousel from "./Carousel/Carousel";

const Main = () => {
  return (
    <main>
      <Carousel />
      <About />
    </main>
  );
};

export default Main;
