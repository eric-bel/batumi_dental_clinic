import React from "react";
import hero from "../../../assets/1.jpg";

const About = () => {
  return (
    <div className="main_container">
      <section className="text-gray-600">
        <div
          className="m-auto flex-col flex px-5 py-6 items-center 
        mob:py-4
        lap:flex-row
        desc:flex-row
        xdesc:flex-row xdesc:grid-cols-2
        "
        >
          <div
            className="mb-1 mob:w-3/4
          md:w-2/3 md:mb-2
          xdesc:w-2/5 xdesc:mb-2 
          "
          >
            <img
              className="object-cover object-center"
              src={hero}
              alt="hero"
            ></img>
          </div>
          <div
            className="lap:ml-7 
          desc:ml-8
          xdesc:w-5/6 xdesc:ml-8
          "
          >
            <h3
              className="text-center text-gray-900 font-medium
            mob:text-xs mob:my-1
            
            "
            >
              О нас
            </h3>
            <p
              className="mb-1 leading-relaxed text-center
            mob:text-[8px]
            tab:text-xs
            md:text-[13px]
            lap:text-[12px] lap:text-left
            desc:text-[14px] desc:text-left
            xdesc:text-[16px] xdesc:text-left
            "
            >
              Batumi Dental Clinic предлагает пациентам полный комплекс
              стоматологических услуг – по диагностике, лечению заболеваний
              зубов и десен, исправлению прикуса, протезированию, имплантации,
              профилактике и гигиене. Мы даем нашим пациентам исчерпывающую
              информацию о методах, объеме и стоимости лечения. Специалисты
              клиники – высококвалифицированные профессионалы, опытные и
              внимательные врачи. Все наши врачи стоматологи индивидуально
              подходят к каждому пациенту; в клинике царит доброжелательная,
              теплая, семейная атмосфера.
            </p>
            <div
              className="text-center text-gray-900 underline
            mob:text-[8px]
            tab:text-[11px]
            md:text-[13px]
            lap:text-[12px]
            desc:text-[14px]
            "
            >
              <a href="/">Подробнее</a>
            </div>
            <div className="flex justify-center">
              {/* <button className="inline-flex text-white bg-[#171D54] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded
              mob:h-1/5">
                Подробнее
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
