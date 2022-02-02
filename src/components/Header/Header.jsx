import React from "react";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
  // className="relative"
  return (
    <div>
      <HeaderTop />
      <HeaderNav />
    </div>
  );
};

export default Header;
