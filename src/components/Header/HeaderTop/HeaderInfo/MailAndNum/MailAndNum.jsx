import React from "react";
import phone from "../../../../../assets/phone.png";

const MailAndNum = () => {
  return (
    <div>
      <div
        className="flex items-center gap-2 mt-3 ml-1 
      mob:-mt-[1px] mob:ml-0.5"
      >
        <img className="tab:w-[7px] mob:w-1" src={phone} alt="phone icon"></img>
        <div className="">+995 577 50 05 35 ;</div>
        <div className="">+0422 25 87 87</div>
      </div>
      <div
        className="flex justify-end text-sm 
        md:text-xs mob:text-[9px] tab:hidden mob:hidden"
      >
        batumidentalclinic@mail.ru
      </div>
    </div>
  );
};

export default MailAndNum;
