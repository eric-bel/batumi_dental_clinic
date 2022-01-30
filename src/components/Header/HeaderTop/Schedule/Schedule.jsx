import React from "react";
import calendar from "../../../../assets/calendar.png";
import Social from "./Social/Social";

const Schedule = () => {
  return (
    <div>
      <div className="tab:hidden mob:hidden">
        <div className="flex items-center ">
          <img className="mob_icons" src={calendar} alt="calendar icon"></img>
          <div className="ml-2">Пн-пт: 10:00 до 19:00</div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-end">
            Сб: 10:00 до 17:00
          </div>
          <div
            className="flex justify-end
          tab:hidden mob:hidden"
          >
            Вс: Выходной
          </div>
        </div>
      </div>
      <div className="mob:hidden"><Social /></div>
    </div>
  );
};

export default Schedule;
