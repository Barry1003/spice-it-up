import React from 'react'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'; 
import Carousel from './Carousel';
import Video from "../../img/production_ID_3769033.mp4"
import SlideShow from './SlideShow';
const Hero = () => {
  return (
    <div classNmae='relative h-screen'>
      <video
            src={Video}
            type="video/mp4"
            loop
            muted
            autoPlay
            controls={false}
            className="h-screen w-full relative object-cover"
          />
          <div className="absolute flex flex-row justify-center top-0 bottom-0 right-0 left-0 items-center z-10 px-12 py-8 gap-2 ">
            <div className="flex flex-col justify-start">
                  <div className="text-h1 md:tex-h3 line-height-0 text-sectionBg font-extrabold">
                        <h1 className='capitalize'>Delicious steak</h1>
                  </div>
                  <div className="flex flex-col space-y-2">
                        <div className="flex flex-row items-center space-x-3">
                              <p className='font-bold text-h3 md:text-h4 text-sectionBg'>4.4/5</p>
                              <i className='flex flex-row'>
                                    <AiFillStar
                                     className='text-yellow-500'
                                    />
                                    <AiFillStar
                                     className='text-yellow-500'
                                    />
                                    <AiFillStar
                                     className='text-yellow-500'
                                    />
                                    <AiOutlineStar
                                    className='text-yellow-500'
                                    />
                                    <AiOutlineStar
                                    className='text-yellow-500'
                                    />
                              </i>
                        </div>
                        <p className='capitalize font-semibold text-sectionBg'>from <span className='text-lg font-bold'>1,206+</span> customer reviews</p>
                  </div> 
            </div>
            <div className="h-1/2 w-1/2">
                  <SlideShow/>
            </div>
          </div>

    </div>
  )
}

export default Hero
