import React from "react";

export default function Team(props) {
  return (
    <div ref={props.refProp} className="relative py-16">
      <div className="w-4/5 md:w-3/4 m-auto relative z-20">
        <div className="">
          <p className="text-black text-opacity-50">Meet Our Team</p>
          <h1 className="text-2xl md:text-5xl font-semibold mb-16 text-darkBlue font-poppins">
            We House Web Experts
          </h1>
        </div>
        <div className="grid md:grid-cols-5 gap-x-10 gap-y-10 items-center">
          <div className="col-span-3">
            <div className="flex gap-5">
              <div className="w-1/2 flex flex-col gap-5">
                <img src="images/about-1.jpg" alt="" />
                <div className="bg-darkBlue flex flex-col md:flex-row items-center py-7 px-5 bottom-left-radius gap-5">
                  <img className="w-14" src="images/award-symbol.png" alt="" />
                  <h2 className="font-poppins text-white font-semibold text-base md:text-xl text-center md:text-left">
                    80+ Project Done
                  </h2>
                </div>
              </div>
              <div className="w-1/2">
                <img
                  src="images/feature-2.png"
                  alt=""
                  className="top-right-radius h-full object-cover w-full"
                />
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-2 space-y-9 rounded-xl">
            <div>
              <div className="flex flex-col items-start gap-4 border-b-2 border-[#1d2f5d29] pb-2 mb-2">
                <img
                  src="/images/expert-designer.svg"
                  alt=""
                  className="p-3 bg-[#efefef] rounded-[13%]"
                />
                <h1 className="text-xl font-semibold text-darkBlue font-poppins">
                  Expert Designers
                </h1>
              </div>
              <p className="text-sm font-poppins">
                Our top-notch designers are prepared to create attractive
                designs that align with your brand's style.
              </p>
            </div>
            <div>
              <div className="flex flex-col items-start gap-4 border-b-2 border-[#1d2f5d29] pb-2 mb-2">
                <img
                  src="/images/ecommerce-pros.svg"
                  alt=""
                  className="p-3 bg-[#efefef] rounded-[13%]"
                />
                <h1 className="text-xl font-semibold text-darkBlue font-poppins">
                  E-Commerce Pros
                </h1>
              </div>
              <p className="text-sm font-poppins">
                Our functional team will help you with your e-commerce webstore
                by helping setup all products.
              </p>
            </div>
            <div>
              <div className="flex flex-col items-start gap-4 border-b-2 border-[#1d2f5d29] pb-2 mb-2">
                <img
                  src="/images/frontend-pros.svg"
                  alt=""
                  className="p-3 bg-[#efefef] rounded-[13%]"
                />
                <h1 className="text-xl font-semibold text-darkBlue font-poppins">
                  Front-end Developer
                </h1>
              </div>
              <p className="text-sm font-poppins">
                We incorporate custom features and seamless integrations via our
                front-end developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
