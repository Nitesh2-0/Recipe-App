import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({ recipe }) => {
  return (
    <>
      {recipe.length > 0 ? recipe.toReversed().map((r, i) => (
        <Link 
          key={i} 
          to={`/recipe-details/${r.id}`} 
          className='cart w-full lg:w-80 pt-2 h-[70%] hover:bg-slate-100 shadow-lg rounded overflow-hidden'
        >
          <img
            className='w-full h-[40vh] rounded-t object-cover'
            src={r.img}
            alt='Recipe'
          />
          <div className='p-4'>
            <h2 className='text-xl font-semibold mb-2'>{r.name}</h2>
            <p className='text-zinc-500'>
              {r.steps.slice(0, 50)} {r.steps.length > 50 ? '....more' : ""}
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
        </Link>
      )) : <h1 className='text-center w-full font-bold text-green-600 text-2xl mb-2'>{"No recipes found".toUpperCase()}</h1>}
    </>
  )
}

export default Cart

