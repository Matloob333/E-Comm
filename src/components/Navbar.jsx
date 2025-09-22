import React from "react";

export default function Navbar({ onToggleSidebar }) {
  return (
    <header className="flex items-center justify-between bg-white shadow px-6 py-4 sticky top-0 z-10">
      <button className="md:hidden mr-4" onClick={onToggleSidebar} aria-label="Toggle sidebar">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="flex items-center space-x-3">
        <div className="w-11 h-11 rounded-full bg-blue-400 flex items-center justify-center">
          <svg width="28" height="28" fill="white" viewBox="0 0 20 20">
            <rect width="20" height="20" rx="3" />
          </svg>
        </div>
        <span className="font-extrabold text-2xl text-gray-800">E-Comm</span>
      </div>
      <nav className="hidden md:flex space-x-10 font-semibold text-gray-900">
        <a href="#" className="text-blue-600">HOME</a>
        <a href="#">BAG</a>
        <a href="#">SNEAKERS</a>
        <a href="#">BELT</a>
        <a href="#">CONTACT</a>
      </nav>
      <div className="hidden md:flex items-center space-x-4">
        <svg
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
        </svg>
        <span className="font-semibold">Items</span>
        <span className="text-gray-400">$0.00</span>
      </div>
    </header>
  );
}
