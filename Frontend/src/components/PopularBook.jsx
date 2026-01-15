import React from 'react'
import list from '../../public/list.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
const book = list;

function PopularBook() {
  var settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className="max-w-7xl mx-auto px-0 mt-10 px-5">
      <h1 className="text-xl font-semibold text-white">
        Popular Books
      </h1>
      <p>
        Explore a curated collection of popular books loved by readers across the world. From timeless classics to modern bestsellers, find stories that inspire, educate, and entertain.
      </p>
    </div>
    <div className="relative max-w-7xl mx-auto px-8 mt-6 mt-16 pb-12">
  <Slider {...settings}>
    {book.map((item) => (
  <Cards item={item} key={item.id} />
))}

  </Slider>
</div>

    </>
    
    
  )
}

export default PopularBook
