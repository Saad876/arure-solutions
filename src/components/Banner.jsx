import React from "react";
export default function Banner(props) {
  return (
    <section>
      <div className="human_image_banner">
        <div className="grid md:grid-cols-2 items-center w-11/12 md:w-3/4 m-auto pt-24 pb-24 h-full ">
          <div className="px-8 py-8 bg-darkBlue rounded-xl z-10">
            <h3 className="text-white text-3xl md:text-5xl font-semibold font-poppins max-w-[500px] ">
              Let’s Get Started With Your Website
            </h3>
            <p className="text-white text-sm md:text-xl my-5 font-poppins max-w-[450px]">
              We take care of it all - from your web design to final
              development.
            </p>
            <div className="text-center md:text-left mt-10">
              <a
                href="/quotation"
                class="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-lighBlue rounded-full shadow-md group"
              >
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full  border-purple-500 group-hover:translate-x-0 ease">
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                  Get a Quote
                </span>
                <span class="relative invisible">Button Text</span>
              </a>
            </div>
          </div>
          <div>
            {/* <img
              className="w-auto h-auto"
              src="images/arure-banner.svg"
              alt=""
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
