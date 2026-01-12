import React from "react";

const nonFictionBooks = [
  {
    title: "Atomic Habits",
    tag: "Self Growth",
    img: "https://covers.openlibrary.org/b/id/10521270-L.jpg",
  },
  {
    title: "Sapiens",
    tag: "History",
    img: "https://covers.openlibrary.org/b/id/9251996-L.jpg",
  },
  {
    title: "Psychology of Money",
    tag: "Psychology",
    img: "https://covers.openlibrary.org/b/id/11153262-L.jpg",
  },
  {
    title: "Ikigai",
    tag: "Lifestyle",
    img: "https://covers.openlibrary.org/b/id/10594733-L.jpg",
  },
];

function NonFiction() {
  return (
    <section className="relative bg-base-100 overflow-hidden">

      {/* ✅ BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 z-0 bg-center "
        
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/63/99/8b/63998b612cc362b4c39e750674fe9407.jpg')",
          backgroundSize: "contain",
           backgroundRepeat: "repeat",  
           backgroundSize: "600px auto",
        }}
      />

      {/* ✅ DARK OVERLAY */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-20">

        {/* HERO */}
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full border border-indigo-400/30 text-indigo-400 text-sm">
              Non-Fiction Library
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
              Learn from the <br />
              <span className="text-indigo-400">Real World</span>
            </h1>

            <p className="text-gray-300 max-w-md">
              Stories based on reality — biographies, psychology, finance and
              ideas that transform the way you think.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-base-200">
              <h3 className="text-2xl font-bold text-indigo-400">250+</h3>
              <p className="text-sm text-gray-400">Non-fiction titles</p>
            </div>
            <div className="p-5 rounded-xl bg-base-200">
              <h3 className="text-2xl font-bold text-indigo-400">40+</h3>
              <p className="text-sm text-gray-400">Top authors</p>
            </div>
          </div>
        </div>

        {/* BOOK SECTION */}
        <div className="max-w-7xl mx-auto px-6 pb-24">
          <h2 className="text-2xl font-semibold mb-8 text-white">
            Popular Non-Fiction Reads
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {nonFictionBooks.map((book, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden bg-base-200
                           hover:shadow-xl transition"
              >
                <div className="overflow-hidden">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="h-[320px] w-full object-cover
                               group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">
                    {book.title}
                  </h3>
                  <span className="inline-block px-3 py-1 rounded-full text-sm
                                   bg-indigo-500/20 text-indigo-300">
                    {book.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default NonFiction;
