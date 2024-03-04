import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './components/Nav'; 
import About from './components/About'; 
import Home from './components/Home';
import Products from "./components/Products";

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/" element ={<Nav/>}/>
    <Route path="/about" element={<About />} />
    <Route path="/products" element={<Products/>}/>
  </Routes>
</BrowserRouter>

  );
}

export default App;
