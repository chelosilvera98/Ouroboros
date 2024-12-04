import React from 'react';
import './App.css'; // Opcional: agrega estilos globales.
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;

