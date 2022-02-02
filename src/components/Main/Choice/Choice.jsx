import React from "react";
import choice from "../../../assets/choice.png";

const Choice = () => {
  return (
    <section className="main_container my-12">
      <div className="flex items-center mb-6 justify-center">
        <img
          className="mr-2 mob:w-[28px] tab:w-[30px] md:w-[32px] lap:w-[37px] lap:mr-4 desc:w-[39px] desc:mr-5"
          src={choice}
          alt="Choice icon"
        ></img>
        <h2
          className="text-2xl 
        mob:text-sm
        tab:text-[14px]
        "
        >
          Почему выбирают нас
        </h2>
      </div>
    </section>
  );
};

export default Choice;
