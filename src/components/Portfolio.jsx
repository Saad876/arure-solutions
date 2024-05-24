import React from "react";
export default function Portfolio(props) {
  return (
    <div
      ref={props.refProp}
      className="py-20 bg-gradient-to-r from-[#46c6ed] to-[#ebebeb] relative z-10"
    >
      <div className="circle-shape"></div>
      <div className="w-3/4 m-auto mb-10 text-center">
        <div className=" text-center space-y-4 mb-20 font-poppins text-[#6C757D]">
          <p>DISCOVER OUR WORK</p>
          <h1 className="text-2xl md:text-5xl font-semibold font-poppins text-darkBlue">
            They Already Trust Us
          </h1>
        </div>
      </div>
      <div
        data-aos="fade-in"
        className="w-3/4 m-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div>
          <img
            className="rounded-2xl h-56 md:h-80  md:object-cover w-full shadow-md relative overlay-img"
            src="images/1.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-2xl h-56 md:h-80  md:object-cover w-full shadow-md relative "
            src="images/6.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-2xl h-56 md:h-80  md:object-cover w-full shadow-md relative "
            src="images/3.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-2xl h-56 md:h-80  md:object-cover w-full shadow-md relative "
            src="images/4.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-2xl h-56 md:h-80  md:object-cover w-full shadow-md relative "
            src="images/5.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-2xl h-56 md:h-80  md:object-cover w-full shadow-md relative "
            src="images/2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
