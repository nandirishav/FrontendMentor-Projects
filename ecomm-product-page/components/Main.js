import React from "react";

const Main = () => {
  return (
    <main>
      <div className="px-8 py-4 flex flex-col lg:px-20 lg:py-20">
        <h3 className="text-[#CC6210] text-sm font-Kumbh">SNEAKER COMPANY</h3>
        <h1 className="text-xl font-bold mt-2 font-Kumbh">
          Fall Limited Edition <br /> Sneakers
        </h1>
        <p className="text-gray-500 my-2 font-Kumbh">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole., they'll withstand everything
          the weather can offer .
        </p>
        <div className="price flex justify-between mb-2 font-Kumbh">
          <div className="left-price flex space-x-8 items-center">
            <div className="font-bold text-2xl">$125.00</div>
            <div className="text-[#CC6210] bg-[#f0e7da] rounded px-1">50%</div>
          </div>
          <div className="right-price text-gray-400 line-through">$250.00</div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-around w-full mt-2">
          <div className="quantity flex justify-between items-center p-2 px-4 mb-2  rounded-md bg-gray-100 font-Kumbh lg:flex-1">
            <span className="text-[#CC6210] font-bold">-</span>
            <span className="font-bold">0</span>
            <span className="text-[#CC6210] font-bold">+</span>
          </div>
          <button className="font-Kumbh flex-grow p-[0.5rem] rounded-lg bg-[#ec904a]  lg:flex-1 ">
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
