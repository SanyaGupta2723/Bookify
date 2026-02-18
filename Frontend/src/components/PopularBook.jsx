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
      <div className="max-w-7xl mx-auto mt-16 px-6 text-center">
  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent mb-4">
    Popular Book's
  </h1>

  <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
    Dive into our handpicked collection of trending and reader-favorite books.
    From timeless classics to modern bestsellers, find stories that inspire,
    educate, and entertain.
  </p>
</div>


      <div className="relative max-w-7xl mx-auto px-8 mt-10 pb-12">
        <Slider {...settings}>
          {books.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </Slider>
      </div>
      
    <section className="min-h-screen bg-base-100 text-white relative overflow-hidden">

      {/* 🔥 Background Glow Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* 🏷️ Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-indigo-400">Kitabify</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Kitabify is more than just a bookstore — it's a digital space where
            stories, ideas, and knowledge come together in one beautiful experience.
          </p>
        </div>

        {/* 📚 Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-indigo-400">
              Our Vision
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We believe books have the power to transform lives. Kitabify was
              created to make discovering and exploring books simple, engaging,
              and secure. Whether you love fiction, non-fiction, or self-growth,
              our platform is designed to make reading more accessible.
            </p>
          </div>

          <div className="bg-base-200 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">
              What Makes Us Special?
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>📖 Curated Fiction & Non-Fiction Collection</li>
              <li>🔐 Secure Login & OTP Verification</li>
              <li>🛒 Smooth Book Browsing Experience</li>
              <li>💬 Easy Contact & Support System</li>
            </ul>
          </div>
        </div>

        {/* 🌟 Community Section */}
        <div className="bg-base-200 p-10 rounded-2xl border border-white/10 mb-20">
          <h2 className="text-2xl font-semibold text-center mb-8 text-indigo-400">
            Our Reading Community
          </h2>

          <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
            Kitabify is built for passionate readers who want a smooth and modern
            platform to explore books online. We aim to build a growing community
            where readers can discover new titles, explore detailed descriptions,
            and enjoy a seamless digital experience.
          </p>
        </div>

        {/* 💬 Closing Message */}
        <div className="text-center text-gray-400">
          <p>
            Built with ❤️ to inspire readers and bring stories closer to you.
          </p>
        </div>

      </div>
    </section>
  );
    </>
  );
  
}

export default PopularBook;
