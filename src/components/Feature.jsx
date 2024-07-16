import React from 'react';

const Feature = () => {
  return (
    <div className="w-[90%] md:w-[80%] m-auto mt-24 p-5 md:p-10">
      <h1 className="text-xl md:text-2xl font-bold text-center">
        OUR AWESOME SERVICES
      </h1>

      <div className="features flex flex-wrap justify-between mt-5 md:mt-[5%] gap-5">
        <div className="w-full md:w-[45%] lg:w-[40%] flex items-center">
          <i className="text-[8vh] md:text-[10vh] ri-restaurant-line mr-3 md:mr-5"></i>
          <div>
            <h1 className="text-lg md:text-xl">Quality Food</h1>
            <p className="text-xs md:text-sm text-zinc-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nesciunt sit in? Consectetur, illum ipsum!
            </p>
          </div>
        </div>

        <div className="w-full md:w-[45%] lg:w-[40%] flex items-center">
          <i className="text-[8vh] md:text-[10vh] ri-graduation-cap-line mr-3 md:mr-5"></i>
          <div>
            <h1 className="text-lg md:text-xl">Cook like a Chef</h1>
            <p className="text-xs md:text-sm text-zinc-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nesciunt sit in? Consectetur, illum ipsum!
            </p>
          </div>
        </div>

        <div className="w-full md:w-[45%] lg:w-[40%] flex items-center">
          <i className="text-[8vh] md:text-[10vh] ri-bread-line mr-3 md:mr-5"></i>
          <div>
            <h1 className="text-lg md:text-xl">Ingredients</h1>
            <p className="text-xs md:text-sm text-zinc-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nesciunt sit in? Consectetur, illum ipsum!
            </p>
          </div>
        </div>

        <div className="w-full md:w-[45%] lg:w-[40%] flex items-center">
          <i className="text-[8vh] md:text-[10vh] ri-presentation-line mr-3 md:mr-5"></i>
          <div>
            <h1 className="text-lg md:text-xl">Easy Recipe</h1>
            <p className="text-xs md:text-sm text-zinc-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nesciunt sit in? Consectetur, illum ipsum!
            </p>
          </div>
        </div>

        <div className="w-full md:w-[45%] lg:w-[40%] flex items-center">
          <i className="text-[8vh] md:text-[10vh] ri-temp-hot-line mr-3 md:mr-5"></i>
          <div>
            <h1 className="text-lg md:text-xl">Serve Hot</h1>
            <p className="text-xs md:text-sm text-zinc-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nesciunt sit in? Consectetur, illum ipsum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
