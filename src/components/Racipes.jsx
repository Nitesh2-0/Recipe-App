import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Recipes = () => {

  const [recipe, setRecipe] = useState([
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpycFWclXlkP65b3MTwe5dN7kHJ7_f9nS6HnA_dKwdOSRln-icjP7aWZB4YHGYU1L4J-s&usqp=CAU",
      name: "Moong Dal",
      steps: "Wash and soak moong dal for 30 minutes. Pressure cook with water, salt, and turmeric powder for 2 whistles. Garnish with coriander leaves."
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661780307431-c21fd96e4129?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Chicken Curry",
      steps: "Marinate chicken with yogurt, spices, and ginger-garlic paste. Cook onions until golden brown, add tomatoes and cook until oil separates. Add chicken and cook until tender."
    },
    {
      img: "https://images.unsplash.com/photo-1708793873401-e8c6c153b76a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Paneer Butter Masala",
      steps: "Blend tomatoes, onions, and cashews into a smooth paste. Cook the paste with butter, cream, and spices until thickened. Add paneer cubes and simmer."
    },
    {
      img: "https://images.unsplash.com/photo-1652545296893-ff9227b3512e?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Aloo Gobhi",
      steps: "Saute cumin seeds in oil, add potatoes and cauliflower florets. Cook with turmeric, salt, and spices until vegetables are tender. Garnish with coriander leaves."
    },
    {
      img: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Palak Paneer",
      steps: "Blanch spinach and blend into a puree. Cook puree with onions, ginger-garlic paste, and spices. Add paneer cubes and simmer until flavors blend."
    },
    {
      img: "https://images.unsplash.com/photo-1603122612817-2fe0e0631a93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Chana Masala",
      steps: "Boil chickpeas until tender. Saute onions, ginger, and garlic until golden. Add tomatoes, spices, and boiled chickpeas. Cook until flavors meld."
    },
    {
      img: "https://images.unsplash.com/photo-1705174427925-744646e72117?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Butter Chicken",
      steps: "Marinate chicken with yogurt, spices, and lime juice. Cook in a tandoor or grill until charred. Prepare a creamy tomato sauce, add grilled chicken, and simmer."
    },
    {
      img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/matar-paneer-1.jpg",
      name: "Matar Paneer",
      steps: "Saute onions, tomatoes, and spices. Add green peas and paneer cubes. Simmer until peas are tender and flavors meld."
    }
  ]);


  return (
    <div className='w-screen h-[90vh] px-7 mt-12 lg:mt-0 lg:px-20'>
      <h1 className='text-center font-semibold text-2xl mb-2'>OUR RECIPES</h1>
      <p className='text-center text-zinc-500 mb-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minus hic magni accusamus dolorem iure?
      </p>
      <div className='scrollbar-hide w-full mt-4 max-h-[85vh] overflow-y-auto lg:p-5 gap-3 flex flex-wrap'>
        {recipe.length > 0 ? recipe.map((r, i) => (
          <div key={i} className='cart w-full lg:w-80 pt-2 h-[70%] hover:bg-slate-100 shadow-lg rounded overflow-hidden'>
            <img
              className='w-full h-[40vh] rounded-t object-cover'
              src={r.img}
              alt='Recipe'
            />
            <div className='p-4'>
              <h2 className='text-xl font-semibold mb-2'>{r.name}</h2>
              <p className='text-zinc-500'>
                {r.steps.slice(0, 50)} {r.steps.length > 50 ? <Link className='text-blue-500 '>....more</Link> : ""}
              </p>
              <div className='w-full flex justify-between p-1 mb-2 mt-6'>
                <div className='flex flex-col justify-center text-center'>
                  <i className="ri-timer-line"></i>
                  <p>20 min</p>
                </div>
                <div className='flex flex-col justify-center text-center'>
                  <i className="ri-thumb-up-line"></i>
                  <p>Like</p>
                </div>
                <div className='flex flex-col justify-center text-center'>
                  <i className="ri-share-line"></i>
                  <p>Share</p>
                </div>
              </div>
            </div>
          </div>
        )) : <h1 className='text-center font-semibold text-green-500 text-2xl mb-2'>No recipes found</h1>}
      </div>
    </div>
  );
};

export default Recipes;
