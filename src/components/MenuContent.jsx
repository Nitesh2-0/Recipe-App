import React from 'react';
import { Link } from 'react-router-dom';

const MenuContent = ({ toggle }) => {
  return toggle && (
    <div className="md:hidden w-[50%] text-[#373739] flex flex-col absolute z-50 gap-4 right-0 top-12 border bg-white shadow-sm p-4">
      <Link to="/" className="border-b hover:bg-green-500 hover:text-white py-2 px-4 rounded-lg text-center">
        Home
      </Link>
      <Link to="/recipes" className="border-b hover:bg-green-500 hover:text-white py-2 px-4 rounded-lg text-center">
        Recipes
      </Link>
      <Link to="/about" className="border-b hover:bg-green-500 hover:text-white py-2 px-4 rounded-lg text-center">
        About
      </Link>
      <Link to="/contact" className="border-b hover:bg-green-500 hover:text-white py-2 px-4 rounded-lg text-center">
        Contact
      </Link>
    </div>
  )
};

export default MenuContent;
