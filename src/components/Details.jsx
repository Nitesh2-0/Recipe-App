import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Details = ({ recipe, setRecipe }) => {
  const notify = () => toast("Wow so easy!");
  const navigate = useNavigate();
  const { id } = useParams();
  const singleRecipe = recipe.find(item => item.id == id);

  const deleteHandler = (id) => {
    const newrecipe = recipe.filter( item => item.id != id);
    setRecipe(newrecipe);
    navigate('/recipes')
    toast.success("Recipe Deleted Successfully!");
  }

  return (
    <div className='w-screen relative mb-32 h-auto gap-10 mt-16 lg:flex lg:px-32'>
      <div className='lg:w-1/2 p-8 lg:p-0 h-full mt-12'>
        <i
          onClick={() => navigate(-1)}
          className="absolute -top-10 ri-arrow-left-line text-xl py-1 px-2 hover:bg-green-400 duration-300 cursor-pointer rounded-full bg-green-200"
        ></i>
        <img className='h-[50%]' src={`${singleRecipe.img}`} alt="" />
      </div>
      <div className='lg:w-1/2 p-8 max-h-full'>
        <div className='w-full max-h-full'>
          <div className='w-full'>
            <h1 className='font-semibold mb-2 text-2xl text-green-700'>Ingredients</h1>
            <hr className='bg-green-500' />
            <ul className="text-zinc-600 list-disc  p-3 ">
              {singleRecipe.steps.split(",").map((d, i) => (
                <li className="list-item text-sm  mb-2" key={i}>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full mt-5'>
            <h1 className='font-semibold mb-2 text-2xl text-green-700'>
              Instructions
            </h1>
            <hr className='bg-green-700' />
            <ul className="text-zinc-600 list-decimal  p-3 ">
              {singleRecipe.steps.split(".").map((step, i) => (
                step.trim() !== "" && (
                  <li className="list-item text-sm mb-2" key={i}>
                    {step.trim()}
                  </li>
                )
              ))}
            </ul>
          </div>
        </div>
        <hr className='my-5' />
        <div className='w-full flex justify-between'>
          <Link className='border duration-300 hover:bg-indigo-200 border-indigo-500 px-8 py-2 rounded' to='#'>
            <i className="ri-edit-box-line text-indigo-600"></i> Update
          </Link>
          <button onClick={() => deleteHandler(singleRecipe.id)} className='border duration-300 hover:bg-red-200 border-red-500 px-8 py-2 rounded'>
            <i className="ri-delete-bin-6-line text-red-500"></i> Delete
          </button>
        </div>
      </div>
    </div >
  );
}

export default Details;
