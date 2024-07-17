import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#232323]  w-full text-white py-4 px-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-2 md:mb-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} Recipe App. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400">
            <i className="ri-facebook-fill text-xl"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="ri-twitter-fill text-xl"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="ri-instagram-fill text-xl"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="ri-linkedin-fill text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
