import React from 'react';
import './App.css';
import Nav from './Component/Nav';
import Product from './Component/Product';
import About from './Component/About';
import Contact from './Component/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Component/Main';
import ProductList from './Component/ProductList';
import Login from './Component/Login';
import Logout from './Component/Logout';



export default function App() {
  return (

    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Product/:id' element={<ProductList />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Logout' element={<Logout />} />

        </Routes>
      </BrowserRouter>

    </div>

  )
}
