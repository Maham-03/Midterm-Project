import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home';
import Services from './components/pages/services'; 
import About from './components/pages/about';
import SignUp from './components/pages/signup';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </Router>
    </>
  )
}


export default App
