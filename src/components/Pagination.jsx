import React from "react";

export default function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="flex justify-center space-x-3 mt-8">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page === 1}
        className="px-3 py-2 border rounded disabled:opacity-50"
      >
        Prev
      </button>
      {[...Array(totalPages).keys()].map((i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`px-3 py-2 border rounded ${page === i + 1 ? "bg-blue-600 text-white" : ""}`}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        disabled={page === totalPages}
        className="px-3 py-2 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
