import React from "react";
import Adress from "./Adress/Adress";
import MailAndNum from "./MailAndNum/MailAndNum";

/*
screens: {
  mob: { min: "100px", max: "639px" },
  tab: { min: "640px", max: "767px" },
  md: { min: "768px", max: "1023px" },
  lap: { min: "1024px", max: "1279px" },
  desc: { min: "1280px", max: "1535px" },
  xdesc: { min: "1536px" },
  min1920: { min: "1920px" },
},
*/

const HeaderInfo = () => {
  return (
    <div>
      <Adress /> <MailAndNum />
    </div>
  );
};

export default HeaderInfo;
