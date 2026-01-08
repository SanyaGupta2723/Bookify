import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const books = [
  {
    id: 1,
    title: "Harry Potter",
    genre: "Fantasy",
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
  },
  {
    id: 2,
    title: "The Hobbit",
    genre: "Fantasy",
    image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
  },
  {
    id: 3,
    title: "The Alchemist",
    genre: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
  },
  {
    id: 4,
    title: "Game of Thrones",
    genre: "Epic Fantasy",
    image: "https://covers.openlibrary.org/b/id/8311996-L.jpg",
  },
  {
    id: 5,
    title: "Percy Jackson",
    genre: "Myth Fantasy",
    image: "https://covers.openlibrary.org/b/id/7274151-L.jpg",
  },
  {
    id: 6,
    title: "The Witcher",
    genre: "Dark Fantasy",
    image: "https://covers.openlibrary.org/b/id/10521269-L.jpg",
  },
];

function FictionPage() {
  return (
    <>
      {/* NAVBAR */}
      <NavBar />
      <div className="h-20 bg-[#020617]"></div>

      {/* HERO */}
      

      {/* BOOKS SECTION */}
      
      <section className="relative min-h-screen">

        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
          className="fixed inset-0 w-full h-full object-cover"
          alt="Library"
        />

        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-20">

          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
  Explore the World of{" "}
  <span className="text-indigo-400">Fiction</span>
</h1>

<p className="text-center text-white/70 max-w-2xl mx-auto mb-14">
  Dive into timeless stories, epic fantasies, and unforgettable Fictional worlds.
</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {books.map((book) => (
              <div
                key={book.id}
                className="group bg-white/5 border border-white/10 
                           rounded-2xl overflow-hidden 
                           backdrop-blur-md shadow-xl 
                           hover:scale-[1.03] transition duration-300"
              >
                <div className="h-64 overflow-hidden">
                  
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover 
                               group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {book.title}
                  </h3>

                  <span className="inline-block mt-2 text-sm px-3 py-1 
                                   rounded-full bg-indigo-500/20 
                                   text-indigo-300">
                    {book.genre}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default FictionPage;
