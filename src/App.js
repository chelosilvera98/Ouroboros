import React, { useState } from 'react';
import './App.css'; // Opcional: agrega estilos globales.
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Función para eliminar productos del carrito
  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index); // Elimina el producto del índice seleccionado
    setCart(newCart);
  };

  return (
    <div>
      <Header />
      <ProductGrid addToCart={addToCart} />
      <Footer />
      {/* Mostrar el carrito */}
      <div style={{ padding: '20px' }}>
        <h2>Carrito de compras</h2>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name}{' '}
                <button onClick={() => removeFromCart(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;