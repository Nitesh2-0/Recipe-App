import React,{useState} from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import MenuContent from './components/MenuContent'
import Layout from './components/Layout'
import Footer from './components/Footer'
import RecipeSection from './components/RecipeSection'
import Create from './components/Create'

const App = () => {
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
  return <div className='w-screen'>
    <Nav />
    <Routes>
      <Route path='/' element={<Layout recipe={recipe} />} />
      <Route path='/recipes' element={<RecipeSection recipe={recipe} setRecipe={setRecipe} />} />
      <Route path='/create-recipe' element={<Create />} />
    </Routes>
    <MenuContent />
    <Footer />
  </div>
}

export default App