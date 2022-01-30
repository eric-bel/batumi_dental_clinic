import React from "react";
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

const HeaderNav = () => {
  return (
    <div
      className="main_container border-t-[1px] border-gray-300 
    tab:hidden mob:hidden"
    >
      <nav>
        <ul className="flex justify-evenly items-center h-12 font-medium md:text-sm">
          <li>Главная</li>
          <li>О нас</li>
          <li>Услуги</li>
          <li>Оборудование</li>
          <li>Контакты</li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNav;
