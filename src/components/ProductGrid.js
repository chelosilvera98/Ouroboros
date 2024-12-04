import Product from './Product.js';

function ProductGrid() {
  const products = [
    { image: 'url_de_imagen', name: 'Producto 1' },
    { image: 'url_de_imagen', name: 'Producto 2' },
    { image: 'url_de_imagen', name: 'Producto 3' },
    // Agrega más productos aquí
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', padding: '20px' }}>
      {products.map((product, index) => (
        <Product key={index} image={product.image} name={product.name} />
      ))}
    </div>
  );
}

export default ProductGrid;