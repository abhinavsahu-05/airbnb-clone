import React, { useContext } from 'react'
import Login from './pages/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import ListingPage1 from './pages/ListingPage1.jsx'
import ListingPage2 from './pages/ListingPage2.jsx'
import ListingPage3 from './pages/ListingPage3.jsx'
import { UserDataContext } from './context/UserContext.jsx'
import MyList from './pages/MyListing.jsx'
import MyListing from './pages/MyListing.jsx'

function App() {

let {userData} = useContext(UserDataContext)

  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/listingpage1' element={ userData ? <ListingPage1/> : <Navigate to = {"/"} /> } />
      <Route path='/listingpage2' element={ userData ? <ListingPage2/> : <Navigate to = {"/"} /> } />
      <Route path='/listingpage3' element={ userData ? <ListingPage3/> : <Navigate to = {"/"} /> } />
      <Route path='/mylisting' element={ userData ? <MyListing/> : <Navigate to = {"/"} /> } />
     </Routes>
    </div>
  )
}

export default App
