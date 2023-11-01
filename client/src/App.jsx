import React, {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProjectDemo from './components/ProjectDemo'
import ContactInfo from './components/Contact'

const App = () => {

  return (
    <div className='NavBar-container items-center justify-center content-center'>
    <Router>
    <NavBar/>
    <Routes>
      <Route path ="/" element={<Home/>} />
      <Route path="/project-demo" element={<ProjectDemo/>} />
      <Route path="/contact" element={<ContactInfo/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App; 