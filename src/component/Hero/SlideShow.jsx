 
import React, { useState, useEffect } from 'react';
import { BsArrowUpLeft, BsArrowUpRight } from 'react-icons/bs';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import img_01 from "../../img/head-1.jpg";
import img_02 from "../../img/head-2.jpg";
import img_03 from "../../img/head-3.jpg";
import { CiLocationOn } from 'react-icons/ci';

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    <div key={0} className={`slide ${currentSlide === 0 ? 'active' : ''}`}>
      {/* Slide content */}
    </div>,
    <div key={1} className={`slide ${currentSlide === 1 ? 'active' : ''}`}>
      {/* Slide content */}
    </div>,
    <div key={2} className={`slide ${currentSlide === 2 ? 'active' : ''}`}>
      {/* Slide content */}
    </div>
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const autoPlay = setInterval(nextSlide, 6000); // Auto navigate every 6 seconds

    const handleArrowClick = () => {
      clearInterval(autoPlay); // Pause auto navigation when arrows are clicked
    };

    const arrowLeft = document.getElementById('left');
    const arrowRight = document.getElementById('right');

    if (arrowLeft && arrowRight) {
      arrowLeft.addEventListener('click', handleArrowClick);
      arrowRight.addEventListener('click', handleArrowClick);
    }

    return () => {
      clearInterval(autoPlay); // Clear the interval on component unmount
      if (arrowLeft && arrowRight) {
        arrowLeft.removeEventListener('click', handleArrowClick);
        arrowRight.removeEventListener('click', handleArrowClick);
      }
    };
  }, []);

  return (
    <div className="slideshow relative">
      {slides[currentSlide]}
      <div className="absolute flex items-center bottom-0 right-0 mr-4 mb-4">
        <button id="left" className="arrow left bg-primary p-4" onClick={prevSlide}>
          <BsArrowUpLeft />
        </button>
        <button id="right" className="arrow right bg-secondary p-4" onClick={nextSlide}>
          <BsArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default SlideShow;
