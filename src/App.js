import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Verificar si el producto ya está en el carrito
      const existingProductIndex = prevCart.findIndex((item) => item.name === product.name);

      if (existingProductIndex !== -1) {
        // Si ya existe, incrementa la cantidad
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        // Si no existe, agrega un nuevo producto con cantidad inicial de 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Función para eliminar productos del carrito
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  // Función para actualizar la cantidad de un producto en el carrito
  const updateCartItemQuantity = (index, newQuantity) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart[index].quantity = newQuantity;
      return updatedCart.filter((item) => item.quantity > 0); // Elimina productos con cantidad 0
    });
  };

  return (
    <div style={layoutStyle}>
      {/* Header */}
      <Header cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />

      {/* Contenido principal */}
      <main style={mainStyle}>
        <Routes>
          <Route
            path="/"
            element={<ProductGrid addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                updateCartItemQuantity={updateCartItemQuantity}
              />
            }
          />
          <Route
            path="/product/:productName"
            element={<ProductDetails addToCart={addToCart} />}
          />
          <Route
            path="*"
            element={
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <h2>404 - Page Not Found</h2>
              </div>
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />
    </div>
  );
}

// Estilos del layout
const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh', // Asegura que la página ocupe al menos toda la pantalla
};

const mainStyle = {
  flex: 1, // Ocupa todo el espacio disponible
  paddingBottom: '60px', // Reserva espacio para el footer
};

export default App;
