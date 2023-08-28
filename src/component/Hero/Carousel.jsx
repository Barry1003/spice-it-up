import React, { useState, useEffect, useRef } from 'react';
import { BsArrowUpLeft, BsArrowUpRight } from 'react-icons/bs';
import img_01 from "../../img/head-1.jpg"
import img_02 from "../../img/head-2.jpg"
import img_03 from "../../img/head-3.jpg"
import {CiLocationOn} from 'react-icons/ci'

const Carousel = () => {
  const carRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const cardWidth = useRef(0);
  const cardChildren = useRef([]);
  const cardPreveiw = useRef(0);

  useEffect(() => {
    cardWidth.current = carRef.current.querySelector('.card').offsetWidth;
    cardChildren.current = [...carRef.current.children];

    cardPreveiw.current = Math.round(carRef.current.offsetWidth / cardWidth.current);

    cardChildren.current
      .slice(-cardPreveiw.current)
      .reverse()
      .forEach((card) => {
        carRef.current.insertAdjacentHTML('afterbegin', card.outerHTML);
      });

    cardChildren.current
      .slice(0, cardPreveiw.current)
      .reverse()
      .forEach((card) => {
        carRef.current.insertAdjacentHTML('beforeend', card.outerHTML);
      });
  }, []);

  const handleBtnClick = (amount) => {
    carRef.current.scrollLeft += amount === 'left' ? -cardWidth.current : cardWidth.current;
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    carRef.current.classList.add('dragging');
    setStartX(e.pageX);
    setStartScrollLeft(carRef.current.scrollLeft);
  };

  const handleDragStop = () => {
    setIsDragging(false);
    carRef.current.classList.remove('dragging');
  };

  const handleDragging = (e) => {
    if (!isDragging) return;
    carRef.current.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  const handleInfiniteScroll = () => {
    if (carRef.current.scrollLeft === 0) {
      carRef.current.classList.add('no-transition');
      carRef.current.classList.remove('no-transition');
      carRef.current.scrollLeft = carRef.current.scrollWidth - 2 * carRef.current.offsetWidth;
    } else if (Math.ceil(carRef.current.scrollLeft) === carRef.current.scrollWidth - carRef.current.offsetWidth) {
      carRef.current.scrollLeft = carRef.current.offsetWidth;
      carRef.current.classList.add('no-transition');
      carRef.current.classList.remove('no-transition');
    }
  };

  const handleAutoPlay = () => {
    if (window.innerWidth < 800) return;
    setTimeout(() => {
      carRef.current.scrollLeft += cardWidth.current;
    }, 1500);
  };

  useEffect(() => {
    handleAutoPlay();
  }, []);

  return (
    <div className="wrapper relative max-w- bg-green-500 mx-auto">
      <i
        id="left"
        className=" bg-red-500 w-12 h-12 text-center line-height-12 z-10 cursor-pointer absolute font-size-xl bottom-1 right-1 transform -translate-y-1/2 shadow-md"
        onClick={() => handleBtnClick('left')}
      >
        <BsArrowUpLeft />
      </i>
      <ul
        ref={carRef}
        className="carousel grid grid grid-cols-auto grid-flow-col grid-cols-1 gap-4 px-4 py-5 overflow-x-auto scroll-snap-x-mandatory smooth-scrolling-touch"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragging}
        onMouseUp={handleDragStop}
        onScroll={handleInfiniteScroll}
      >
        <li className="card"> 
        {/* Replace this with your actual .card structure */}
           <div className="relative w-full h-full">
                  <img src={img_01} className='w-full h-full object-cover' alt="" />
                  <div className="flex flex-col absolute justify-end p-8 bottom-0 text-white space-y-3">
                        <div className="flex flex-row items-center">
                              <CiLocationOn/>
                              <p>Manhattan, New York</p>
                        </div>
                        <h3 classNme='font-medium'> Fine Dining Restaurant</h3> 
                  </div>
           </div>
           
        </li>
      </ul>
      <i
        id="right"
        className=" bg-whitesmoke w-12 h-12 text-center line-height-12 rounded-full cursor-pointer absolute font-size-xl top-1/2 transform -translate-y-1/2 shadow-md"
        onClick={() => handleBtnClick('right')}
      >
        <BsArrowUpRight />
      </i>
    </div>
  );
};

export default Carousel;