import React from "react";

export default function Rating({ value, count }) {
  const fullStars = Math.floor(value);
  const halfStar = value % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 mt-2 text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} />
      ))}
      {halfStar && <HalfStar />}
      {[...Array(emptyStars)].map((_, i) => (
        <EmptyStar key={`empty-${i}`} />
      ))}
      <span className="ml-2 text-gray-600 text-sm">({count})</span>
    </div>
  );
}

const Star = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
    <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.561-.955L10 0l2.949 5.955 6.561.955-4.755 4.635 1.123 6.545z" />
  </svg>
);

const HalfStar = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
    <defs>
      <linearGradient id="half-grad">
        <stop offset="50%" stopColor="currentColor" />
        <stop offset="50%" stopColor="transparent" />
      </linearGradient>
    </defs>
    <path
      fill="url(#half-grad)"
      d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.561-.955L10 0l2.949 5.955 6.561.955-4.755 4.635 1.123 6.545z"
    />
  </svg>
);

const EmptyStar = () => (
  <svg
    className="w-4 h-4 stroke-current text-gray-300 fill-none"
    viewBox="0 0 20 20"
  >
    <path
      stroke="currentColor"
      strokeWidth="1"
      d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.561-.955L10 0l2.949 5.955 6.561.955-4.755 4.635 1.123 6.545z"
    />
  </svg>
);
