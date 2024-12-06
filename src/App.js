import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [cart, setCart] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };


  // Función para eliminar productos del carrito
  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<ProductGrid addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route
          path="*"
          element={<div style={{ textAlign: 'center', padding: '20px' }}><h2>404 - Page Not Found</h2></div>}
        />
      </Routes>
      <Footer cartCount={cart.length} />
    </>
  );
}

export default App;