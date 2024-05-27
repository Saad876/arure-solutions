import React from "react";
import { portfolioData } from "./PortfolioData";
import { PortfolioCard } from "./PortfolioCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Portfolio(props) {
  const settings = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    margin: "30px",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
      <div data-aos="fade-in" className="w-3/4 m-auto">
        <Slider {...settings}>
          {portfolioData.map((item) => (
            <div key={item.id}>
              <PortfolioCard img={item.img} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
