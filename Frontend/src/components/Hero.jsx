import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-base-100 pt-5 pb-14 md:pt-32 md:pb-24">
  <div className="max-w-7xl mx-auto px-5
                  flex flex-col md:flex-row
                  items-center
                  gap-6 md:gap-14">

    {/* LEFT TEXT */}
    <div className="w-full md:w-1/2
                    space-y-4 md:space-y-7
                    text-center md:text-left">

      <h1 className="text-3xl sm:text-4xl md:text-5xl
                     font-bold leading-snug">
        Discover your next <br />
        <span className="text-primary">favorite book</span> with Bookify
      </h1>

      <p className="text-base-content/70
                    text-sm sm:text-base md:text-lg
                    leading-relaxed max-w-md mx-auto md:mx-0">
        Explore thousands of books, discover new authors, and enjoy
        a seamless reading experience — all in one place.
      </p>

      <div className="flex flex-col sm:flex-row
                      gap-3 sm:gap-4
                      justify-center md:justify-start">
        <button className="btn btn-primary px-6">
          Browse Books
        </button>
        <button className="btn btn-outline border-white/30">
          Explore Categories
        </button>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="w-full md:w-1/2
                    flex justify-center
                    mt-4 md:mt-0">

      <div className="relative w-full
                      h-[170px]
                      sm:h-[220px]
                      md:h-[320px]
                      lg:h-[360px]
                      max-w-xs
                      sm:max-w-sm
                      md:max-w-lg
                      lg:max-w-xl
                      rounded-xl overflow-hidden
                      shadow-lg
                      border border-white/10">

        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Books"
            className={`absolute inset-0 w-full h-full object-cover
                        transition-opacity duration-1000
                        ${i === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>

    </div>
  </div>
</section>

  );
}

export default Hero;
