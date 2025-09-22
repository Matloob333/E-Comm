import React from "react";
import shoeImg from "../assets/images/af3bd991ca08635dbdf9c0400408400496803559.png";

export default function Banner() {
  return (
    <div className="bg-blue-400 rounded-lg p-6 md:p-8 mb-6 flex flex-col md:flex-row items-center justify-between">
      <div className="text-white max-w-xl text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
          Adidas Men Running Sneakers
        </h2>
        <p className="mb-5">Performance and design. Taken right to the edge.</p>
        <a href="#" className="font-semibold border-b border-white">SHOP NOW</a>
      </div>
      <img
        src={shoeImg}
        alt="Adidas running sneakers"
        className="mt-6 md:mt-0 h-40 md:h-48 object-contain"
      />
    </div>
  );
}
