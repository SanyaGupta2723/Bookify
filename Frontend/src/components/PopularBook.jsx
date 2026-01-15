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
    </>
  );
}

export default PopularBook;
