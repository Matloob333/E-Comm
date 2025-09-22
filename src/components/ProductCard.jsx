import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function ProductCard({ product, selectedColor }) {
  const panelColor = selectedColor || (product.colors && product.colors[0]) || "#EDF2F7";

  return (
    <div className="bg-white rounded-xl shadow p-4 relative flex flex-col">
            <Link to={`/product/${product.id}`} className="relative mb-4 block">
        <div
          className="w-full h-28 sm:h-32 md:h-36 rounded-lg mb-3 flex items-center justify-center"
          style={{ backgroundColor: panelColor }}
        >
          <img
            src={product.imageUrl || "https://via.placeholder.com/150"}
            alt={product.name}
            className="h-20 sm:h-24 md:h-28 object-contain"
          />
        </div>
      </Link>
      <Link to={`/product/${product.id}`}>
        <h3 className="font-bold text-blue-900 mb-2 truncate hover:underline text-center">
          {product.name}
        </h3>
      </Link>
      <Rating value={product.ratingValue} count={product.ratingCount} />
      <div className="flex items-center justify-center space-x-2 mt-2">
        <span className="text-blue-500 font-bold text-lg">
          ${product.discountPrice.toFixed(2)}
        </span>
        <span className="line-through text-gray-400">${product.price.toFixed(2)}</span>
        <span className="text-pink-600 font-semibold">{product.discountPercent}% Off</span>
      </div>
                </div>
  );
}
