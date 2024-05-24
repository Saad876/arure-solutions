import React from "react";

export default function WorkCard(props) {
  return (
    <div className="text-white bg-darkBlue p-8 rounded-xl  border border-transparent hover:border-[#46c6ed]">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-[22px] font-semibold font-poppins">
          {props.title}
        </h1>
        <img className="" src={props.img} alt={props.title} />
      </div>

      <p className="text-base font-light font-poppins">{props.desc}</p>
    </div>
  );
}
