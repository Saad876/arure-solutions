import React from "react";

export default function Services(props) {
  return (
    <div className="team-bg">
      <div
        ref={props.refProp}
        className="w-4/5 md:w-3/4 m-auto py-16 md:py-32 "
      >
        <div className="text-center">
          <p className="text-black text-opacity-50">How We Can Help</p>
          <h1 className="text-2xl md:text-5xl font-semibold text-center mb-16 text-darkBlue">
            What We Offer
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6  [&>div]:cursor-pointer">
          <div className="border space-y-4 px-6 py-12 hover:shadow-2xl rounded-r-3xl rounded-t-3xl bg-white duration-300 hover:bg-darkBlue hover:text-white">
            <div>
              <img src="images/design-icon.svg" alt="" />
            </div>
            <h1 className="text-xl font-semibold font-poppins">Design</h1>
            <p className="text-sm">
              We craft a web design that mirrors your brand identity and adheres
              to your graphic standards.
            </p>
          </div>
          <div className="border space-y-4 px-6 py-12 hover:shadow-2xl rounded-r-3xl rounded-t-3xl bg-white duration-300 hover:bg-darkBlue hover:text-white text-darkBlue">
            <div>
              <img src="images/web-dev-icon.svg" alt="" />
            </div>
            <h1 className="text-xl font-semibold font-poppins">Development</h1>
            <p className="text-sm">
              We code and develop the entire thing - frontend and backend to
              meet your expectations.
            </p>
          </div>
          <div className="border space-y-4 px-6 py-12 hover:shadow-2xl rounded-r-3xl rounded-t-3xl bg-white duration-300 hover:bg-darkBlue hover:text-white">
            <div>
              <img src="images/implementation-icon.svg" alt="" />
            </div>
            <h1 className="text-xl font-semibold font-poppins">
              Implementation
            </h1>
            <p className="text-sm">
              We deploy the website or webstore and help you add in all the
              necessary data in place.
            </p>
          </div>
          <div className="border space-y-4 px-6 py-12 hover:shadow-2xl rounded-r-3xl rounded-t-3xl bg-white duration-300 hover:bg-darkBlue hover:text-white">
            <div>
              <img src="images/training-icon.svg" alt="" />
            </div>
            <h1 className="text-xl font-semibold font-poppins">Training</h1>
            <p className="text-sm">
              We end with a base-level training for you to edit or troubleshoot
              the website autonomously.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
