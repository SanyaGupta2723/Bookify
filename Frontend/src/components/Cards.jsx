import React from "react";
import { Link } from "react-router-dom";

function Cards({ item }) {
  return (
    <Link to={`/book/${item._id}`} className="block">
      <div
        className="
        bg-base-200 rounded-xl p-4 h-full
        flex flex-col
        border border-white/5
        hover:border-primary
        hover:shadow-lg
        transition duration-300
        cursor-pointer
      "
      >
        {/* IMAGE */}
        <div
          className="
          h-[260px]
          flex items-center justify-center
          bg-gradient-to-b from-white/5 to-transparent
          rounded-lg
          overflow-hidden
          mb-4
        "
        >
          <img
            src={item.image || "/no-book.png"}
            alt={item.name}
            className="h-full w-auto object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* TITLE + CATEGORY */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold text-white line-clamp-1">
            {item.name}
          </h2>

          <span className="badge badge-secondary text-xs">
            {item.category}
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm text-white/70 flex-grow line-clamp-2">
          {item.title}
        </p>

        {/* PRICE */}
        <div className="mt-3 flex justify-between items-center">
          <span className="text-primary font-semibold text-lg">
            ₹{item.price}
          </span>

          <button className="btn btn-sm btn-primary">
            View
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Cards; 