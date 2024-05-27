import React from "react";

export const PortfolioCard = ({ img }) => {
  return (
    <>
      <div className="mx-5">
        <img
          className="rounded-2xl h-56 md:h-96  md:object-cover w-full shadow-md "
          src={img}
          alt=""
        />
      </div>
    </>
  );
};
