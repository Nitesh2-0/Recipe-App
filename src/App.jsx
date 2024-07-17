import React, { useState } from 'react'
import Nav from './components/Nav'
import { Route, Routes} from 'react-router-dom'
import MenuContent from './components/MenuContent'
import Layout from './components/Layout'
import Footer from './components/Footer'
import RecipeSection from './components/RecipeSection'
import Create from './components/Create'
import Details from './components/Details'

const App = () => {
  const [recipe, setRecipe] = useState([
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpycFWclXlkP65b3MTwe5dN7kHJ7_f9nS6HnA_dKwdOSRln-icjP7aWZB4YHGYU1L4J-s&usqp=CAU",
      name: "Moong Dal",
      id: 1,
      steps: "Wash and soak moong dal for 30 minutes. Pressure cook with water, salt, and turmeric powder for 2 whistles. Garnish with coriander leaves."
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661780307431-c21fd96e4129?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Chicken Curry",
      id: 2,
      steps: "Marinate chicken with yogurt, spices, and ginger-garlic paste. Cook onions until golden brown, add tomatoes and cook until oil separates. Add chicken and cook until tender."
    },
    {
      img: "https://images.unsplash.com/photo-1708793873401-e8c6c153b76a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Paneer Butter Masala",
      id: 3,
      steps: "Blend tomatoes, onions, and cashews into a smooth paste. Cook the paste with butter, cream, and spices until thickened. Add paneer cubes and simmer."
    },
    {
      img: "https://images.unsplash.com/photo-1652545296893-ff9227b3512e?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Aloo Gobhi",
      id: 4,
      steps: "Saute cumin seeds in oil, add potatoes and cauliflower florets. Cook with turmeric, salt, and spices until vegetables are tender. Garnish with coriander leaves."
    },
    {
      img: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Palak Paneer",
      id: 5,
      steps: "Blanch spinach and blend into a puree. Cook puree with onions, ginger-garlic paste, and spices. Add paneer cubes and simmer until flavors blend."
    },
    {
      img: "https://images.unsplash.com/photo-1603122612817-2fe0e0631a93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Chana Masala",
      id: 6,
      steps: "Boil chickpeas until tender. Saute onions, ginger, and garlic until golden. Add tomatoes, spices, and boiled chickpeas. Cook until flavors meld."
    },
    {
      img: "https://images.unsplash.com/photo-1705174427925-744646e72117?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Butter Chicken",
      id: 7,
      steps: "To cook Butter Chicken, start by marinating chicken pieces in a mixture of yogurt, lemon juice, and spices like turmeric, cumin, and garam masala. After marinating for a few hours, grill or bake the chicken until fully cooked. In a separate pan, sauté onions, garlic, ginger, and tomatoes until they form a thick sauce. Add butter, cream, and more spices to taste, then simmer the sauce with the cooked chicken until flavors meld together. Serve hot with rice or naan bread."
    },
    {
      img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/matar-paneer-1.jpg",
      name: "Matar Paneer",
      id: 8,
      steps: "Saute onions, tomatoes, and spices. Add green peas and paneer cubes. Simmer until peas are tender and flavors meld."
    }
  ]);
  return <div className='w-screen'>
    <Nav />
    <Routes>
      <Route path='/' element={<Layout recipe={recipe} />} />
      <Route path='/recipes' element={<RecipeSection recipe={recipe} setRecipe={setRecipe} />} />
      <Route path='/create-recipe' element={<Create />} />
      <Route path='/recipe-details/:id' element={<Details recipe={recipe} setRecipe= {setRecipe} />} />
    </Routes>
    <MenuContent />
    <Footer />
  </div>
}

export default App