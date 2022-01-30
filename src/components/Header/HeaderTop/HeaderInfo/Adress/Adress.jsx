import React from "react";
import geopoint from "../../../../../assets/geopoint.png";

const Adress = () => {
  return (
    <div className="flex-col items-center">
      <div className="flex items-center">
        <img className="mr-1 tab:w-3 mob_icons" src={geopoint} alt="geopoint"></img>
        <div className="">Грузия, г. Батуми, ул. 26 Мая, 74</div>
      </div>
      <div
        className="flex justify-end items-start text-sm text-lime-500 -mt-[3px]
        md:text-xs tab:text-[8px] mob:hidden
      "
      >
        показать на карте
      </div>
    </div>
  );
};

export default Adress;
