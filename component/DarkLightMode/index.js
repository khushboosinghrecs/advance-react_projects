import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ThemeProvider } from './theme-context';

import Navbar from './components/NavBar';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import './style.css'

function DarkLightMode() {
  return (
    <ThemeProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  </ThemeProvider>  )
}

export default DarkLightMode;