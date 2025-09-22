import React, { useState } from "react";
import products from "../data/products";

export default function Sidebar({
  open,
  onClose,
  selectedColor,
  setSelectedColor,
  selectedBrands,
  setSelectedBrands,
  priceRange,
  setPriceRange,
}) {
  // build category counts in a simple way
  const categoryCounts = {};
  for (let i = 0; i < products.length; i++) {
    const cat = products[i].category;
    if (!categoryCounts[cat]) {
      categoryCounts[cat] = 0;
    }
    categoryCounts[cat]++;
  }
  const categories = Object.keys(categoryCounts).sort();

  // simple local state for sections
  const [showCategories, setShowCategories] = useState(true);
  const [showMoreCats, setShowMoreCats] = useState(false);

  // color options
  const colors = [
    "red",
    "#2287F9",
    "#FADA22",
    "#000000",
    "#FFFFFF",
    "#FF4D6D",
    "#10B981",
    "#C0C0C0",
  ];

  // helper to toggle selected brand/category
  function toggleBrand(name) {
    if (selectedBrands.includes(name)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== name));
    } else {
      setSelectedBrands([...selectedBrands, name]);
    }
  }

  // compute which categories to show (at least 6)
  let visible = categories.slice(0, 6);
  if (showMoreCats) {
    visible = categories;
  } else if (visible.length < 6) {
    const toAdd = 6 - visible.length;
    for (let i = 0; i < toAdd; i++) {
      visible.push("More " + (i + 1));
    }
  }

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-20 z-40 transition-opacity duration-200 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed top-0 left-0 h-full z-50 bg-gray-50 w-64 p-6 space-y-6 transform transition-transform duration-200 md:static md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:block rounded-lg shadow text-black`}
        style={{ minWidth: "250px", maxWidth: "300px" }}
      >
        <button onClick={onClose} className="md:hidden mb-6 w-full text-right font-bold">
          × Close
        </button>

        {/* Hot Deals (static) */}
        <div className="border-b border-gray-300 pb-4">
          <h3 className="font-bold text-lg mb-3">Hot Deals</h3>
          <ul className="space-y-1">
            <li className="flex justify-between font-bold text-blue-600">
              Airmax <span>48</span>
            </li>
            <li className="flex justify-between">Nike <span>14</span></li>
            <li className="flex justify-between">Adidas <span>15</span></li>
            <li className="flex justify-between">Vans <span>23</span></li>
            <li className="flex justify-between">All Stars <span>1</span></li>
          </ul>
        </div>

        {/* Prices */}
        <div className="border-b border-gray-300 pb-4">
          <h3 className="font-bold text-lg mb-3">Prices</h3>
          <div>
            <span className="text-xs">
              Range: <span className="font-bold">${priceRange[0]} - ${priceRange[1]}</span>
            </span>
            <input
              type="range"
              className="w-full accent-blue-500 mt-1"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            />
          </div>
        </div>

        {/* Colors */}
        <div className="border-b border-gray-300 pb-4">
          <h3 className="font-bold text-lg mb-3">Color</h3>
          <div className="flex flex-wrap gap-3">
            {colors.map((c) => (
              <button
                key={c}
                onClick={() => (selectedColor === c ? setSelectedColor(null) : setSelectedColor(c))}
                className={`w-6 h-6 rounded-full border-2 border-white shadow ${
                  selectedColor === c ? "ring-2 ring-black" : ""
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-lg">Categories</h3>
            <button className="text-sm text-blue-600" onClick={() => setShowCategories(!showCategories)}>
              {showCategories ? "Hide" : "Show"}
            </button>
          </div>

          {showCategories && (
            <>
              <ul className="space-y-1">
                {visible.map((name) => (
                  <li
                    key={name}
                    onClick={() => toggleBrand(name)}
                    className={`flex justify-between cursor-pointer ${
                      selectedBrands.includes(name) ? "font-bold text-blue-600" : ""
                    }`}
                  >
                    <span>{name}</span>
                    <span>{categoryCounts[name] ? categoryCounts[name] : 0}</span>
                  </li>
                ))}
              </ul>
              <button
                className="mt-6 w-full py-1 border border-black rounded-full shadow bg-white font-semibold"
                onClick={() => setShowMoreCats(!showMoreCats)}
              >
                {showMoreCats ? "View less" : "View more"}
              </button>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
