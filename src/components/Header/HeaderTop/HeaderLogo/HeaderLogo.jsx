import React from "react";
import logo from "../../../../assets/logo.png";
import logosmall from "../../../../assets/logosm.jpg";

const HeaderLogo = () => {
  return (
    <div>
      <img
        className="w-[180px] mob:w-[100px]
      md:hidden tab:hidden mob:hidden"
        src={logo}
        alt="logo"
      ></img>
      <img
        className="w-16
      min1920:hidden  xdesc:hidden  desc:hidden lap:hidden mob:w-8"
        src={logosmall}
        alt="small logo"
      ></img>
    </div>
  );
};

export default HeaderLogo;
