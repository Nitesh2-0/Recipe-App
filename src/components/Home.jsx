import React from 'react'

const Home = () => {
  return <div className='w-full lg:h-[90vh] lg:flex justify-center lg:justify-between items-center px-7 lg:px-16'>
    <div className='w-full lg:w-1/2  md:px-12 '>
      <h1 className="text-7xl md:py-5 lg:py-0 font-extrabold text-green-600">
        SIMPLE AND TASTY RECIPES
      </h1>
      <p className="text-zinc-400 mt-5 mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eligendi eos maiores harum doloribus, praesentium alias qui
        esse id atque sapiente similique quis, velit fugit, nemo
        unde consectetur voluptatem sequi repellat.
      </p>
      <hr className='mb-5' />
      <div className='mb-5 text-zinc-600 text-sm lg:text-base'>
        <p><i className="ri-arrow-right-circle-fill text-green-500 hover:text-green-600"></i> Latest Recipes Available</p>
        <p><i className="ri-arrow-right-circle-fill text-green-500 hover:text-green-600"></i> Easy to cook at Home</p>
        <p><i className="ri-arrow-right-circle-fill text-green-500 hover:text-green-600"></i> Follow the assigned recipe steps.</p>
      </div>
      <button className='py-2 px-5 bg-green-500 text-white hover:bg-green-700 duration-200 rounded mb-12 lg:mb-0'>
        Get Started &nbsp; &#8594;
      </button>
    </div>
    <img
      className="md:px-12 lg:w-1/2"
      src="https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Clipart.png"
      alt=""
    />
  </div >
}

export default Home