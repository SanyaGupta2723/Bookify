import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function FictionPage() {
  const [books, setBooks] = useState([]);

  // 🔹 BACKEND SE BOOKS FETCH
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books");
        setBooks(res.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      {/* NAVBAR SPACE */}
      <div className="h-20 bg-[#020617]"></div>

      {/* BOOKS SECTION */}
      <section className="relative min-h-screen">
        {/* BACKGROUND IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-20">
          {/* HEADING */}
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Explore the World of{" "}
            <span className="text-indigo-400">Fiction</span>
          </h1>

          <p className="text-center text-white/70 max-w-2xl mx-auto mb-14">
            Dive into timeless stories, epic fantasies, and unforgettable
            Fictional worlds.
          </p>

          {/* BOOK GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {books.map((book) => (
              <Link key={book._id} to={`/book/${book._id}`}>
                <div
                  className="group bg-white/5 border border-white/10 
                             rounded-2xl overflow-hidden 
                             backdrop-blur-md shadow-xl 
                             hover:scale-[1.03] transition duration-300
                             cursor-pointer"
                >
                  {/* IMAGE */}
                  <div className="h-64 overflow-hidden">
                    <img
                      src={book.image}
                      alt={book.name}
                      className="w-full h-full object-cover 
                                 group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white">
                      {book.name}
                    </h3>

                    <span
                      className="inline-block mt-2 text-sm px-3 py-1 
                                 rounded-full bg-indigo-500/20 
                                 text-indigo-300"
                    >
                      {book.category || "Fiction"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FictionPage;
