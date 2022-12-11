import React from 'react'
import './App.css'
import ProductImage from './components/ProductImage';
import TopNav from './components/TopNav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNav from './components/BottomNav';

const App = () => {
  return (
    <>
      <Router>
        <TopNav />
        <BottomNav />
        <Routes>
          <Route path='/productImg' element={<ProductImage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App