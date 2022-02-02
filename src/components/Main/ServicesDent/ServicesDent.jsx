import React from "react";
import serv from "../../../assets/services/serv.png";
import child from "../../../assets/child.png";
import treat from "../../../assets/treat.jpg";
import surgery from "../../../assets/surgery.jpg";
import implant from "../../../assets/implant.jpg";
import correct from "../../../assets/correct.jpg";

const ServicesDent = () => {
  return (
    <section className="main_container my-4">
      <div className="flex justify-center items-center mb-6 ">
        <img
          className="mr-2 mob:w-[28px] tab:w-[30px] md:w-[32px] lap:w-[37px] lap:mr-4 desc:w-[39px] desc:mr-5"
          src={serv}
          alt="Our services icon"
        ></img>
        <h2
          className="text-2xl 
        mob:text-sm
        tab:text-[15px]
        "
        >
          Наши услуги
        </h2>
      </div>

      <div
        id="accordionExample5"
        className="accordion w-3/4 mx-auto 
      mob:w-4/5 mob:text-[10px]
      tab:w-4/5 tab:text-[10px]
      "
      >
        {/* Лечение зубов */}
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingOne5">
            <button
              className="
              bg-[#eff2f4]
            text-lg
            font-extrabold
            accordion-button
            collapsed
            relative
            flex
            items-center
            justify-center
            w-full
            py-4
            px-5
          text-black text-center
            border-none
            rounded-none
            transition
            ocus:outline-none
        "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne5"
              aria-expanded="true"
              aria-controls="collapseOne5"
            >
              <div
                className="flex justify-center text-center w-full
              mob:text-[12px]
              tab:text-[14px]
              "
              >
                Лечение зубов
              </div>
            </button>
          </h2>
          <div
            id="collapseOne5"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne5"
          >
            <div className="accordion-body">
              <img className="w-full" src={treat} alt="treatment"></img>
              <div className="flex justify-center py-4 px-5 text-black bg-[#eff2f4]">
                <ul className="list-disc">
                  <li>Пломбирование каналов</li>
                  <li>Пломбирование зубов</li>
                  <li>Чистка зубов</li>
                  <li>Отбеливание зубов</li>
                  <li>Лечение кариеса</li>
                  <li>Лечение пульпита</li>
                  <li>Лечение периодонтита</li>
                  <li>Лечение пародонтоза</li>
                  <li>Лечение пародонтита</li>
                  <li>Лечение гингивита</li>
                  <li>Лечение десен</li>
                  <li>Реставрация зубов</li>
                  <li>Наращивание зубов</li>
                  <li>Художественная реставрация зубов</li>
                  <li>Лечение зубов при беременности</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/*   Имплантация зубов */}

        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingTwo5">
            <button
              className="
              bg-[#eff2f4]
              text-lg
            font-extrabold
            accordion-button
            collapsed
            relative
            flex
            items-center
            justify-center
            w-full
            py-4
            px-5
        text-black text-center
          border-none
          rounded-none
          transition
          focus:outline-none
        "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo5"
              aria-expanded="false"
              aria-controls="collapseTwo5"
            >
              <div
                className="flex justify-center text-center w-full 
              mob:text-[12px]
              tab:text-[14px]
              "
              >
                Имплантация зубов
              </div>
            </button>
          </h2>
          <div
            id="collapseTwo5"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo5"
          >
            <div className="accordion-body">
              <img className="w-full" src={implant} alt="treatment"></img>
              <div className="flex justify-center py-4 px-5 text-black bg-[#eff2f4]">
                <ul className="list-disc">
                  <li>Двухэтапная имплантация зубов</li>
                  <li>Протезирование зубов</li>
                  <li>Съемные зубные протезы</li>
                  <li>Несъемное протезирование</li>
                  <li>Виниры</li>
                  <li>Металлокерамическая коронка</li>
                  <li>Безметалловая керамика</li>
                  <li>Циркониевые коронки</li>
                  <li>Мостовидный протез</li>
                  <li>Вкладка на зуб</li>
                  <li>Культевая вкладка</li>
                  <li>Бюгельный протез</li>
                  <li>Нейлоновый протез</li>
                  <li>Протезирование на имплантах</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Хирургия */}

        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingThree5">
            <button
              className="
              bg-[#eff2f4]
              text-lg
            font-extrabold
            accordion-button
            collapsed
            relative
            flex
            items-center
            justify-center
            w-full
            py-4
            px-5
        text-black text-center
          border-none
          rounded-none
          transition
          focus:outline-none
        "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree5"
              aria-expanded="false"
              aria-controls="collapseThree5"
            >
              <div
                className="flex justify-center text-center w-full 
              mob:text-[12px]
              tab:text-[14px]
              "
              >
                Хирургия
              </div>
            </button>
          </h2>
          <div
            id="collapseThree5"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree5"
          >
            <div className="accordion-body">
              <img className="w-full" src={surgery} alt="treatment"></img>
              <div className="flex justify-center py-4 px-5 text-black bg-[#eff2f4]">
                <ul className="list-disc">
                  <li>Удаление зубов</li>
                  <li>Удаление зубов мудрости</li>
                  <li>Удаление кисты зуба</li>
                  <li>Кюретаж</li>
                  <li>Резекция зуба</li>
                  <li>Синус-лифтинг</li>
                  <li>Другие операции</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingFour5">
            <button
              className="
              bg-[#eff2f4]
              text-lg
            font-extrabold
            accordion-button
            collapsed
            relative
            flex
            items-center
            justify-center
            w-full
            py-4
            px-5
        text-black text-center
          border-none
          rounded-none
          transition
          focus:outline-none
        "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour5"
              aria-expanded="false"
              aria-controls="collapseFour5"
            >
              <div
                className="flex justify-center text-center w-full 
              mob:text-[12px]
              tab:text-[14px]
              "
              >
                Исправление прикуса
              </div>
            </button>
          </h2>
          <div
            id="collapseFour5"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour5"
          >
            <div className="accordion-body ">
              <img className="w-full" src={correct} alt="treatment"></img>
              <div className="flex justify-center py-4 px-5 text-black bg-[#eff2f4]">
                <ul className="list-disc">
                  <li>Металлические брекеты</li>
                  <li>Керамические брекеты</li>
                  <li>Сапфировые брекеты</li>
                  <li>Самолигирующие брекеты</li>
                  <li>Капа для зубов</li>
                  <li>Исправление прикуса у детей</li>
                  <li>Пластинка на зубы</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headinSix5">
            <button
              className="
              bg-[#eff2f4]
              text-lg
            font-extrabold
            accordion-button
            collapsed
            relative
            flex
            items-center
            justify-center
            w-full
            py-4
            px-5
        text-black text-center
          border-none
          rounded-none
          transition
          focus:outline-none
        "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix5"
              aria-expanded="false"
              aria-controls="collapseSix5"
            >
              <div
                className="flex justify-center text-center w-full 
              mob:text-[12px]
              tab:text-[14px]
              "
              >
                Детская стоматология
              </div>
            </button>
          </h2>
          <div
            id="collapseSix5"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix5"
          >
            <div className="accordion-body">
              <img className="w-full" src={child} alt="child"></img>
              <div className="flex justify-center text-black bg-[#eff2f4]">
                <ul className="list-disc py-4 px-5">
                  <li>Детская ортодонтия</li>
                  <li>Лечение молочных зубов</li>
                  <li>Лечение кариеса молочных зубов</li>
                  <li>Детская хирургия</li>
                  <li>Седация в стоматологии детям</li>
                  <li>Лечение зубов под общей анестезией</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDent;
