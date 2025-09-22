import React from "react";

export default function Badge({ text }) {
  return (
    <span className="absolute -top-2 left-4 bg-[#FF4D6D] text-white text-[11px] font-bold px-3 py-1 rounded-md shadow">
      {text}
    </span>
  );
}
