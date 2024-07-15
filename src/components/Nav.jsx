import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuContent from './MenuContent';

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [iconClass, setIconClass] = useState('ri-menu-fill');

  const handleToggle = () => {
    setToggle(!toggle);
    setIconClass(toggle ? 'ri-menu-fill' : 'ri-close-line text-[#373739] font-semibold');
  };

  return (
    <nav className="w-full flex items-center justify-between px-8 md:px-20 lg:px-32">
      <Link to="/"><img
        className="h-[7vh] lg:h-[10vh]"
        src="https://static.vecteezy.com/system/resources/thumbnails/008/212/813/small/cooking-logo-design-vector.jpg"
        alt="Logo"
      /></Link>
      <div className="hidden md:flex gap-12 justify-center items-center">
        <Link className='hover:font-semibold hover:text-green-600' to="/"> Home </Link>
        <Link className='hover:font-semibold hover:text-green-600' to="/recipes"> Recipes </Link>
        <Link className='hover:font-semibold hover:text-green-600' to="/about"> About </Link>
        <Link className='hover:font-semibold hover:text-green-600' to="/contact"> Contact </Link>
      </div>
      <i className="hidden md:flex text-3xl ri-grid-fill text-green-600"></i>
      <i onClick={handleToggle} className={`${iconClass} text-3xl md:hidden cursor-pointer`}></i>
      {toggle && <MenuContent toggle={toggle} />}
    </nav>
  );
}

export default Nav;
