import React from "react";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import Langu from "./Langu/Langu";
import Schedule from "./Schedule/Schedule";
import MenuGamburger from "./MenuGamburger/MenuGamburger";
const HeaderTop = () => {
  return (
    <div className="main_container">
      <div
        className="header_container py-2.5 flex justify-between items-center 
      md:text-xs tab_text mob_text"
      >
        <HeaderLogo />
        <HeaderInfo />
        <Schedule />
        <Langu />
        {/* <MenuGamburger /> */}
      </div>
    </div>
  );
};

export default HeaderTop;
