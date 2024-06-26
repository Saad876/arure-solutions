import React from "react";

export default function Header(props) {
  return (
    <div>
      <header className="shadow-lg p-2 md:p-3 overflow-hidden">
        <div className="flex items-center justify-between w-11/12 md:w-3/4  m-auto">
          <div>
            <a href="/">
              <img className="w-32" src="images/logoDark.png" alt="logo" />
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-x-8 [&>li]:cursor-pointer ">
              <li className="hover:text-[#46c6ed]">
                <button onClick={props.services}>Services</button>
              </li>
              <li className="hover:text-[#46c6ed] " onClick={props.team}>
                Team
              </li>
              <li className="hover:text-[#46c6ed]" onClick={props.working}>
                Working
              </li>
              <li className="hover:text-[#46c6ed]">
                <a href="/quotation">Quotation</a>
              </li>
              {/* <li className="hover:text-[#46c6ed]" onClick={props.quotation}>
                Quotation
              </li> */}
              <li className="hover:text-[#46c6ed]" onClick={props.portfolio}>
                Portfolio
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-x-3">
            <div>
              <a
                href="/quotation"
                class="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-darkBlue rounded-full shadow-md group"
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
                  Get Started
                </span>
                <span class="relative invisible">Button Text</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
