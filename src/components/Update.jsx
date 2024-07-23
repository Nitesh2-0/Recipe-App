import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Update = ({ recipe = [] }) => {
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const item = recipe.find((re) => re.id == id);
    if (item) {
      setImg(item.img || '');
      setTitle(item.name || '');
      // setIngredients((item.name || []).join(', '));
      // setInstructions((item.steps || []).join(', '));
    } else {
      console.log('Recipe not found');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      id,
      img,
      title,
      description,
    };
    toast.success('Details updated successfully.')
    navigate(-1)
  };

  return (
    <form onSubmit={handleSubmit} className="w-[90%] lg:w-[70%] m-auto mb-[20%] h-[82vh] md:h-[80vh] pb-5">
      <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
        Update <br /> Recipe Details
      </h1>
      <input
        onChange={(e) => setImg(e.target.value)}
        value={img}
        type="url"
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe Image URL"
        required
      />
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe Name"
      />
      <textarea
        onChange={(e) => setIngredients(e.target.value)}
        value={ingredients}
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe Ingredients (use comma to separate ingredients)..."
      ></textarea>
      <textarea
        onChange={(e) => setInstructions(e.target.value)}
        value={instructions}
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe Instructions (use comma to separate instructions)..."
      ></textarea>
      <div className="w-full text-right">
        <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
          Publish Recipe &nbsp; &#8594;
        </button>
      </div>
    </form>
  );
};

export default Update;
