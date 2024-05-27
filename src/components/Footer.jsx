import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#0e172e] relative z-10">
      <div className="map-img"></div>
      <div className="w-3/4 m-auto pt-14">
        <div className="grid lg:grid-cols-4 text-white text-start gap-x-5 gap-y-8">
          <div>
            <img className="h-32" src="images/logo.png" alt="logo" />
            <p className="text-white text-opacity-60 mt-4">
              Let's Get Started With Your Website We take care of it all - from
              your web design to final development.
            </p>
            <div className="flex text-white gap-3 mt-4">
              <a
                href="https://www.facebook.com/aruretech"
                className="bg-darkBlue p-3 rounded-fullest hover:bg-lighBlue transition-all"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/14543180"
                className="bg-darkBlue p-3 rounded-fullest hover:bg-lighBlue transition-all"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://twitter.com/Aruretech"
                className="bg-darkBlue p-3 rounded-fullest hover:bg-lighBlue transition-all"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/arure.tech/"
                className="bg-darkBlue p-3 rounded-fullest hover:bg-lighBlue transition-all"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="ml-0 lg:ml-10 ">
            <h1 className="font-semibold  text-white text-xl font-poppins mb-4">
              Links
            </h1>
            <ul className="text-white text-opacity-60 ">
              <li className="mb-3 hover:text-lighBlue transition-all">
                Services
              </li>
              <li className="mb-3 hover:text-lighBlue transition-all">Team</li>
              <li className="mb-3 hover:text-lighBlue transition-all">
                Quotation
              </li>
              <li className="hover:text-lighBlue transition-all">Portfolio</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold  text-white text-xl font-poppins mb-4">
              Contact
            </h1>
            <ul className="text-white text-opacity-60">
              <li className="mb-3 max-w-[200px]">
                Arure LLC, 659, 447 Broadway, 2nd Floor, New York, NY, New York,
                US, 10013
              </li>
              <li>Phone # (858) 463-4405</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold  text-white text-xl font-poppins mb-4">
              Have a project in your mind?
            </h1>
            <a
              href="https://www.arure.tech/"
              className="bg-darkBlue p-5 rounded-fullest text-white text-sm w-[115px] h-[115px] flex items-center hover:bg-lighBlue transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="text-center bg-darkBlue text-[#e2e8f0] py-6 mt-16 rounded-t-3xl">
          <h3>
            <a href="https://www.arure.tech/">Arure Technologies</a> &trade;Ltd
            &reg;
          </h3>
        </div>
      </div>
    </div>
  );
}
