import React from 'react';
import Feature from './Feature';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full relative'>
      <i
        onClick={() => navigate(-1)}
        className="absolute -top-12 left-4  md:-top-16 md:left-20 lg:-top-12 lg:left-36 ri-arrow-left-line text-xl py-1 px-2 hover:bg-green-400 duration-300 cursor-pointer rounded-full bg-green-200"
      ></i>
      <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto mt-[15%] lg:mt-16 md:mt-[10%] p-5 md:p-10 bg-green-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl lg:text-7xl mt-5 font-extrabold text-green-600 mb-[10%] md:mb-[7%] lg:mb-[5%] ">
          LET'S TALK ABOUT WHAT WE ARE
        </h1>
        <button className="rounded-md text-sm md:text-md bg-green-600 text-white py-2 px-4 md:py-2 md:px-5 hover:bg-green-700 duration-200">
          JAAN PEHCHAN BNA LO FRAANDS &nbsp; &#8594;
        </button>
      </div>
      <Feature />
    </div>
  );
}

export default About;
