import React from "react";
import engl from "../../../../assets/engflag.png";
import rus from "../../../../assets/russiaflag.png";
import geo from "../../../../assets/georgiaflag.png";

const Langu = () => {
  return (
    <div className="flex flex-col gap-y-2 mob:gap-y-1">
      <img className="md_icons" src={engl} alt="great britain flag"></img>
      <img className="md_icons" src={rus} alt="russi an flag"></img>
      <img className="md_icons" src={geo} alt="georgian flag"></img>
    </div>
  );
};

export default Langu;
