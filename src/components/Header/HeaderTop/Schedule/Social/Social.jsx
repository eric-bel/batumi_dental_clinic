import React from "react";
import facebook from "../../../../../assets/fb.png";
import instagram from "../../../../../assets/insta.png";
import whatsapp from "../../../../../assets/whatsapp.png";

const Social = () => {
  return (
    <div
      className="flex justify-end items-center gap-2 mt-1.5 
    tab:flex-col mob:flex-col"
    >
      <img className="md_icons" src={whatsapp} alt="whatsapp icon"></img>
      <img className="md_icons" src={facebook} alt="facebook icon"></img>
      <img className="md_icons" src={instagram} alt="instagram icon"></img>
    </div>
  );
};

export default Social;
