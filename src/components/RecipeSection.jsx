import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Cart from './Cart';

const RecipeSection = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-x-hidden max-h-screen px-5 lg:px-16">
      <div className="w-full mt-8 flex justify-between items-center">
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-xl py-3 px-4 hover:bg-green-400 duration-300 cursor-pointer rounded-full bg-green-200"
        ></i>
        <Link
          to="/create-recipe"
          className="cursor-pointer md:mr-5 rounded-md py-2 px-5 bg-green-200 gap-x-3 flex items-center hover:bg-green-300 duration-300"
        >
          <i className="text-2xl text-green-600 ri-add-box-line"></i>
          Create Recipe
        </Link>
      </div>
      <h1 className="mt-4 text-center font-bold text-xl lg:text-xl">OUR RECIPES</h1>
      <div className='scrollbar-hide w-full mb-12 mt-4 pb-5 max-h-[85vh] overflow-y-auto lg:ml-4 gap-6 flex flex-wrap'>
        <Cart recipe={recipe} />
      </div>
    </div>
  );
}

export default RecipeSection;
