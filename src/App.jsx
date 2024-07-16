import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import MenuContent from './components/MenuContent'
import Layout from './components/Layout'
import Footer from './components/Footer'

const App = () => {
  return <div className='w-screen'>
    <Nav />
    <Routes>
      <Route path='/' element={<Layout />} />
    </Routes>
    <MenuContent />
    <Footer />
  </div>
}

export default App