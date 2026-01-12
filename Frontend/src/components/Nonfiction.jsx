import React from "react";

const books = [
  {
    title: "Viking",
    img: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
  },
  {
    title: "Sherlock Holmes",
    img: "https://covers.openlibrary.org/b/id/10594734-L.jpg",
  },
  {
    title: "George Orwell",
    img: "https://covers.openlibrary.org/b/id/8225261-L.jpg",
  },
  {
    title: "Atomic Habits",
    img: "https://covers.openlibrary.org/b/id/10521270-L.jpg",
  },
  {
    title: "Sapiens",
    img: "https://covers.openlibrary.org/b/id/9251996-L.jpg",
  },
  {
    title: "Deep Work",
    img: "https://covers.openlibrary.org/b/id/10909258-L.jpg",
  },
  {
    title: "Psychology",
    img: "https://covers.openlibrary.org/b/id/11153262-L.jpg",
  },
  {
    title: "Biography",
    img: "https://covers.openlibrary.org/b/id/10494792-L.jpg",
  },
];

function NonFictionBooks() {
  return (
    <section className="bg-[#121212] px-10 py-16">

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
        {books.map((book, i) => (
          <div
            key={i}
            className="group relative bg-[#1b1b1b] rounded-xl overflow-hidden
                       shadow-lg transition transform hover:-translate-y-2 hover:scale-105"
          >
            {/* BOOK IMAGE */}
            <img
              src={book.img}
              alt={book.title}
              className="w-full h-[260px] object-cover"
            />

            {/* HOVER OVERLAY */}
            <div
              className="absolute inset-0 bg-black/70 opacity-0
                         group-hover:opacity-100 transition flex items-end"
            >
              <div className="p-4">
                <h3 className="text-sm font-semibold text-white">
                  {book.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NonFictionBooks;
