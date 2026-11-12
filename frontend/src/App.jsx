import React from 'react'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import ListingPage1 from './pages/ListingPage1.jsx'
import ListingPage2 from './pages/ListingPage2.jsx'

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/listingpage1' element={<ListingPage1/>} />
      <Route path='/listingpage2' element={<ListingPage2/>} />
     </Routes>
    </div>
  )
}

export default App
