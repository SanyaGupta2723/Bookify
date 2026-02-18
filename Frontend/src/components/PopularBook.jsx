import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import axios from "axios";

function PopularBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books");
        setBooks(res.data.slice(0, 6));
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <div className="max-w-7xl mx-auto mt-10 px-5">
        <h1 className="text-xl font-semibold text-white">
          Popular Books
        </h1>
        <p className="text-white/70">
          Explore a curated collection of popular books loved by readers across the world.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 mt-10 pb-12">
        <Slider {...settings}>
          {books.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </Slider>
      </div>
     
  <>
    <div className="max-w-7xl mx-auto mt-10 px-5">
      <h1 className="text-xl font-semibold text-white">
        Popular Books
      </h1>
      <p className="text-white/70">
        Explore a curated collection of popular books loved by readers across the world.
      </p>
    </div>

    <div className="relative max-w-7xl mx-auto px-8 mt-10 pb-12">
      <Slider {...settings}>
        {books.map((item) => (
          <Cards key={item._id} item={item} />
        ))}
      </Slider>
    </div>

    {/* ✅ ABOUT US SECTION (Homepage Version) */}
    <div className="bg-gradient-to-r from-purple-900 to-indigo-900 py-16 mt-10">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-6">
          About Kitabify 📚
        </h2>

        <p className="text-white/80 max-w-3xl mx-auto mb-8">
          Kitabify is a modern book discovery platform where readers can explore,
          review, and discover amazing books across different genres.
          Our mission is to make reading more engaging, accessible, and enjoyable
          for everyone.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-2">
              📖 Huge Collection
            </h3>
            <p className="text-white/70">
              Explore thousands of books from fiction to non-fiction.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-2">
              ⭐ Reader Reviews
            </h3>
            <p className="text-white/70">
              Discover books loved and recommended by readers.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-2">
              🔍 Easy Search
            </h3>
            <p className="text-white/70">
              Quickly find your next favorite read.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

    </>
  );
  
}

export default PopularBook;
