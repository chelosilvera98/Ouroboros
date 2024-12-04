import Product from './Product';

function ProductGrid({ addToCart }) {
  const products = [
    { image: '/public/images/tshirts/ts1.png', name: 'T-Shirt 1' },
    { image: '/public/images/tshirts/ts2.png', name: 'T-Shirt 2' },
    { image: '/public/images/tshirts/ts3.png', name: 'T-Shirt 3' },
    { image: '/public/images/tshirts/ts4.png', name: 'T-Shirt 4' },
    { image: '/public/images/tshirts/ts5.png', name: 'T-Shirt 5' },
    { image: '/public/images/tshirts/ts6.png', name: 'T-Shirt 6' },
    { image: '/public/images/tshirts/ts7.png', name: 'T-Shirt 7' },
    { image: '/public/images/tshirts/ts8.png', name: 'T-Shirt 8' },
    { image: '/public/images/tshirts/ts9.png', name: 'T-Shirt 9' }
    // Agrega más productos aquí
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', padding: '20px' }}>
      {products.map((product, index) => (
        <Product key={index} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductGrid;