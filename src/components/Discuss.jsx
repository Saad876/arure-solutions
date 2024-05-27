import React from "react";

export default function Discuss() {
  return (
    <div className="pt-32 pb-32 relative z-10 overflow-hidden">
      <div className="corner-pattern"></div>
      <div className="w-3/4 m-auto">
        <div className="md:flex-row flex flex-col items-center">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="w-full md:w-1/2"
          >
            <h4 className="text-sm text-[#6C757D] font-poppins mb-4 text-center md:text-left">
              Let's Kick It Off
            </h4>
            <h2 className="text-4xl text-black font-semibold font-poppins text-center md:text-left">
              Talk to an Arure Expert <br></br> Today!
            </h2>
          </div>
          <div className="w-full md:w-1/2 mt-14 md:mt-0">
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex justify-center md:justify-end relative"
            >
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
              <div className="cta-arrow"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="corner-pattern bottom-pattern"></div>
    </div>
  );
}
