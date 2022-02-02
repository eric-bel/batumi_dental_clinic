import React from "react";
import "tw-elements";
import About from "./About/About";
import Carousel from "./Carousel/Carousel";
import Choice from "./Choice/Choice";
import ServicesDent from "./ServicesDent/ServicesDent";

const Main = () => {
  /* #16A085 - #F4D03F */
  // #29ffc6 - #20e3b2
  // #EC4895 - #F59B0D
  // className="
  // bg-gradient-to-r from-[#EC4895] to-[#F59B0D]"
  return (
    <main>
      <Carousel />
      <About />
      <ServicesDent />
      <Choice />

      <section class="main_container p-6 mx-auto bg-white dark:bg-gray-800">
        <h2 class="text-xl text-center font-medium text-gray-800 capitalize dark:text-white md:text-2xl mb-4">
          Our Team
        </h2>

        <div class="flex items-center justify-center">
          <div class="flex flex-row gap-5 mob:flex-col">
            <div class="w-full max-w-xs text-center">
              <img
                class="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"
                alt="avatar"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
                  Ahmed Omer
                </h3>
                <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">
                  CEO
                </span>
              </div>
            </div>

            <div class="w-full max-w-xs text-center">
              <img
                class="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
                  Jane Doe
                </h3>
                <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">
                  Co-founder
                </span>
              </div>
            </div>

            <div class="w-full max-w-xs text-center">
              <img
                class="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                alt="avatar"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
                  Steve Ben
                </h3>
                <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">
                  UI/UX
                </span>
              </div>
            </div>

            <div class="w-full max-w-xs text-center">
              <img
                class="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
                  Patterson Johnson
                </h3>
                <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">
                  Software Engineer
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;