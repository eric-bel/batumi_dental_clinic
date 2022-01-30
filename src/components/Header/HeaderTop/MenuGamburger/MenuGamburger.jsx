import React from "react";
import menu from "../../../../assets/menugamburger.png";

const MenuGamburger = () => {
  return (
    <div>
      <img
        className="min1920:hidden xdesc:hidden  desc:hidden 
      lap:hidden md:hidden tab:block tab:w-10 mob:block
      md:-ml-12 desc:-ml-4"
        src={menu}
        alt="menu icon"
      ></img>
    </div>
  );
};

export default MenuGamburger;
