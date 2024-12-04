function Product({ product, addToCart }) {
  return (
    <div style={{ textAlign: 'center', margin: '10px' }}>
      <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
      <p>{product.name}</p>
      <button onClick={() => addToCart(product)} style={{ padding: '5px 10px', marginTop: '10px' }}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default Product;