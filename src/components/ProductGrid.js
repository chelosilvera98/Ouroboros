import Product from './Product';
import products from './productsData'; // Importa los datos centralizados

function ProductGrid({ addToCart }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '20px',
        padding: '20px',
      }}
    >
      {products.map((product, index) => (
        <Product key={index} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductGrid;