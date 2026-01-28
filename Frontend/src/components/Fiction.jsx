import React, { useEffect, useState } from "react";
import axios from "axios";
 import Cards from "./Cards.jsx"; // use jab cards render karo

function FictionHero() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    getBooks();
  }, []);

  return (
    <Link to={`/book/${item._id}`}>
    <section
      className="relative min-h-[50vh] flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519682337058-a94d519337bc')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-none"></div>


      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Step Into the World of <br />
          <span className="text-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.6)]">
            Fiction & Fantasy
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-white/80">
          Ancient libraries, magical realms, and stories that awaken your
          imagination. Lose yourself in worlds beyond reality.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap">
          <button className="px-7 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition shadow-lg shadow-indigo-500/40">
            Explore Fiction
          </button>

          <button className="px-7 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10 transition">
            Browse Collection
          </button>
        </div>
      </div>
    </section>
    </Link>
  );
  
}

export default FictionHero;
