import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import MenuContent from './components/MenuContent'
import Layout from './components/Layout'

const App = () => {
  return <div className='w-screen h-screen'>
    <Nav />
    <Routes>
      <Route path='/' element={<Layout />} />
    </Routes>
    <MenuContent />
  </div>
}

export default App