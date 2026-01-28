import React from "react";
import { Link } from "react-router-dom";

function Cards({ item }) {
  return (
    <Link to={`/book/${item._id}`}>
    <div className="block cursor-pointer relative z-10">
      <div
        className="
          bg-base-200 rounded-xl p-4 h-full
          flex flex-col
          border border-white/5
          hover:border-white/10
          transition
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
            src={item.image}
            alt={item.name}
            className="h-full w-auto object-contain"
          />
        </div>

        {/* TITLE + CATEGORY */}
        <div className="flex items-center gap-2 mb-1">
          <h2 className="text-lg font-semibold text-white">
            {item.name}
          </h2>
          <span className="badge badge-secondary text-xs">
            {item.category}
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm text-white/70 flex-grow">
          {item.title}
        </p>

        {/* PRICE */}
        <div className="mt-3 text-right text-white font-semibold">
          ₹{item.price}
        </div>
      </div>
    </div>
    </Link>
  );
  
}


export default Cards;
