import React from 'react'
import CategoryPage from './pages/CategoryPage'
import { Route, Routes } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<CategoryPage />} />
        <Route path='/profilepage/:profileID' element={<ProfilePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App