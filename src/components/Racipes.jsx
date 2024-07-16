import React from 'react';
import Cart from './Cart';

const Recipes = ({ recipe }) => {
  return (
    <div className='w-screen h-[90vh] px-7 mt-12 lg:mt-0 lg:px-20'>
      <h1 className='text-center font-semibold text-2xl mb-2'>OUR RECIPES</h1>
      <p className='text-center text-zinc-500 mb-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minus hic magni accusamus dolorem iure?
      </p>
      <div className='scrollbar-hide w-full mt-4 max-h-[85vh] overflow-y-auto lg:ml-5 pb-5 gap-5 flex flex-wrap'>
        <Cart recipe={recipe} />
      </div>
    </div>
  );
};

export default Recipes;
