import { useNavigate } from 'react-router-dom';

function Product({ product, addToCart }) {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${encodeURIComponent(product.name)}`);
  };

  return (
    <div style={styles.productContainer}>
      {/* Imagen del producto */}
      <div style={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.name}
          style={styles.image}
          onClick={handleProductClick}
        />
      </div>

      {/* Nombre del producto */}
      <p
        onClick={handleProductClick}
        style={styles.productName}
      >
        {product.name}
      </p>

      {/* Botón de agregar al carrito */}
      <button
        onClick={() => addToCart(product)}
        style={styles.addToCartButton}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

const styles = {
  productContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: 'none',
    padding: '10px',
    height: '100%', // Asegura que todos los contenedores tengan la misma altura
  },
  imageContainer: {
    width: '100%', // Se ajusta al ancho del contenedor
    height: '200px', // Tamaño consistente para las imágenes
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain', // Ajusta la imagen sin deformarla
    cursor: 'pointer',
  },
  productName: {
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '10px',
    cursor: 'pointer',
  },
  addToCartButton: {
    padding: '10px 20px',
    marginTop: '10px',
    border: 'none',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'center',
  },
};

export default Product;
