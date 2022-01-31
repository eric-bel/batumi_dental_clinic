import React from "react";
import team from "../../../assets/team.jpg";
import slide1 from "../../../assets/slide1.jpg";
import slide3 from "../../../assets/slide3.jpg";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img
              // src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
              src={slide1}
              className="block w-full"
              alt="..."
            />
            <div
              className="carousel-caption absolute text-left
            md:mb-32
            tab:mb-8
            lap:mb-48
            desc:mb-52
            xdesc:mb-60 xdesc:ml-32
            min1920:mb-[400px] xdesc:ml-38
            "
            >
              <h1
                className=" text-[#171D54] font-extrabold
                mob:text-[11px]  mob:leading-3 mob:w-[130px]
                tab:text-[30px]  tab:leading-7 tab:w-[330px]
                md:text-[27px] md:leading-7 md:w-[350px]
                lap:text-[29px]  lap:leading-8 lap:w-[350px]
                desc:text-[35px] desc:leading-9 desc:w-[450px] 
                xdesc:text-[35px] xdesc:leading-9 xdesc:w-[490px] xdesc:font-black
                min1920:text-[45px] min1920:leading-[60px] min1920:w-[490px] min1920:font-black
             "
              >
                Batumi Dental <span className="text-green-600">Clinic</span>
              </h1>
              <p
                className="text-[#171D54] text-left mt-2
            mob:text-[9px] mob:w-[130px] mob:leading-3
            tab:text-[22px] tab:leading-6 tab:w-[330px]
            md:text-[22px] md:leading-6 md:w-[350px]
            lap:text-[24px] lap:leading-7 lap:w-[350px] lap:mt-4
            desc:text-[31px] desc:leading-8 desc:w-[450px] desc:mt-5
            xdesc:text-[31px] xdesc:leading-8 xdesc:w-[490px] xdesc:mt-5
            min1920:text-[37px] min1920:leading-9 min1920:w-[590px] min1920:font-extrabold
            "
              >
                Доступная и безопасная стоматология для взрослых и детей
              </p>
            </div>
          </div>
          {/* <div className="carousel-item relative float-left w-full">
            <img
              src={team}
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption md:block absolute text-center">
              <h5
                className="text-xl
              mob:hidden"
              >
                Команда опытных специалистов
              </h5>
              <p
                className="
              mob:"
              >
                Доктора нашей клиники - это команда опытных специалистов
              </p>
            </div>
          </div> */}
          {/* <div className="carousel-item relative float-left w-full">
            <img
              //   src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
              src={slide3}
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption md:block absolute text-center">
              <h5 className="text-xl mob-slider-text">
                Провессиональная забота о безопасности
              </h5>
              <p>
                <p className="mob-slider-text">Вытяжная система вентиляции</p>
                <p className="mob-slider-text">
                  Бактерицидные рециркуляторы воздуха
                </p>
                <p className="mob-slider-text">
                  Генеральная обработка кабинетов
                </p>
                <p className="mob-slider-text">
                  Антисептичсекая обработка ручек и санузлов
                </p>
                <p className="mob-slider-text">
                  Средства индивидуальной защиты
                </p>
              </p>
            </div>
          </div> */}
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
