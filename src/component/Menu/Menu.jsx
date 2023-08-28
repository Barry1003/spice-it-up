import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import menu1 from "../../img/morning.jpg";
import menu2 from "../../img/menu-2.jpg";
import menu3 from "../../img/menu-3.jpg";
import menu4 from "../../img/menu-4.jpg";
import menu5 from "../../img/menu-5.jpg";
import menu6 from "../../img/menu-6.jpg";
import './menu.css'

const MenuItem = ({ imageSrc, category, title, rating, reviews, icons, price, c_price }) => {
  return (
    <div className="menu_content rounded-md bg-slate-300 p-6">
      <div className="menu_img_cont relative">
        <img src={imageSrc} className="image object-cover" alt="" />
        <span className='absolute top-4 right-4 bg-yellow-300 px-8 py-2 capitalize rounded-md '>{category}</span>
      </div>
      <div className="menu_dec flex flex-col justify-start">
        <div className="main_dec flex flex-col">
          <h2 className="title font-medium capitalize text-h4 font-body">{title}</h2>
          <div className="flex flex-row items-center gap-4">
            <span className="bg-slate-500 p-3 rounded-full text-yellow-400 font-semibold ">{price}</span>
            <span className='line-through text-black'>{c_price}</span>
          </div>
        </div>

        <div className="rating flex flex-row gap-3 items-center">
          <h2 className='text-h4'>{rating}</h2>
          <i className='text-yellow-300 flex flex-row'>{icons}</i>
          <small className='font-thin text-h6 capitalize text-p'>{reviews} reviews</small>
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const menuItems = [
    { imageSrc: menu1,  price:"$12.50", category: "breakfast", title: "Morning fresh", rating: "4.3/5", reviews: "102", icons: [<AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar/>, <AiOutlineStar />] },
    { imageSrc: menu2,  price:"$24.50", category: "lunch", title: "tooplate soup", rating: "3/5", reviews: "50", icons: [<AiFillStar />, <AiFillStar />, <AiFillStar />, <AiOutlineStar />, <AiOutlineStar />] },
    { imageSrc: menu3, c_price:"$150", price:"$45", category: "dinner", title: "premiun Steak", rating: "3/5", reviews: "86", icons: [<AiFillStar />, <AiFillStar />, <AiFillStar />, <AiOutlineStar />, <AiOutlineStar />] },
    { imageSrc: menu4,  c_price:"$124", price:"$86", category: "dinner", title: "seafood set", rating: "3/5", reviews: "44", icons: [<AiFillStar />, <AiFillStar />, <AiFillStar />, <AiOutlineStar />, <AiOutlineStar />] },
    { imageSrc: menu5,  price:"$20.5", category: "breakfast", title: "burger set", rating: "4.3/5", reviews: "102", icons: [<AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar/>, <AiOutlineStar />] },
    { imageSrc: menu6,  price:"$34.20", category: "lunch", title: "healthy soup", rating: "3/5", reviews: "64", icons: [<AiFillStar />, <AiFillStar />, <AiFillStar />, <AiOutlineStar />, <AiOutlineStar />] }
    // ... add more menu items
  ];

  return (
    <div className="main_cont my-15 bg-sectionBg">
      <div className="header text-h2 flex flex-col items-center capitalize justify-center font-body font-bold">
        <h1>special menu</h1>
        <span className='span'></span>
      </div>
      <div className="menu_contents grid grid-cols-1 md:grid-cols-3 gap-8 p-12 ">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
