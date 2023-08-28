import React, { useState } from 'react';

const Navigation = () => {
  const [activeItem, setActiveItem] = useState(0); // Set the default active item to 0 (Home)

  const handleItemClick = (itemIndex) => {
    if (itemIndex === 0) {
      // Clicked on "Home", set activeItem to 0 regardless
      setActiveItem(0);
    } else {
      setActiveItem(itemIndex);
    }
  };

  const listItems = ['Home', 'Story', 'Menu', 'Our Update', 'Contact'];

  return (
    <ul className="flex flex-row space-x-4 w-full  ">
      {listItems.map((item, index) => (
        <li
          key={index}
          className={`text-title font-700 capitalize ${
            activeItem === index ? 'active text-primary' : 'hover:text-primary'
          }`}
        >
          <a
            className="no-underline"
            href={`#${item.toLowerCase().replace(' ', '')}`}
            onClick={() => handleItemClick(index)}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Header = () => {
  return (
    <div className="header bg-sectionBg py-5 px-16">
      <nav className="flex flex-row justify-between w-full h-full items-center">
        <div className="flex font-body md:justify-center">
          <h2 className="text-h4 capitalize text-dark">spice up Kitchen</h2>
        </div>
        <div className="flex">
          <Navigation />
        </div>
        <div className="bg-primary py-2 px-4 rounded-md">
          <button className="capitalize text-2xl text-white">reservation</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
