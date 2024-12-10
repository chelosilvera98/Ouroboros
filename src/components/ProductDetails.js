import { useParams, useNavigate } from 'react-router-dom';
import products from './productsData'; // Importa los datos centralizados

function ProductDetails({ addToCart }) {
  const { productName } = useParams();

  const navigate = useNavigate();

  const decodedProductName = decodeURIComponent(productName);
  const product = products.find((p) => p.name === decodedProductName);

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Producto no encontrado</h2>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
          }}
        >
          Volver a la tienda
        </button>
      </div>
    );
  }

  return (
    <div className="product-details">
      {/* Imagen del producto */}
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            maxWidth: '400px',
            objectFit: 'contain',
            border: 'none',
          }}
        />
      </div>

      {/* Detalles del producto */}
      <div className="product-info">
        <h1 style={{ fontSize: '2rem', marginBottom: '15px' }}>{product.name}</h1>
        <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.8', textAlign: 'justify' }}>
          {product.description}
        </p>

        {/* Precio del producto */}
        <div style={{ marginBottom: '20px' }}>
          {product.salePrice ? (
            <div>
              <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'red', marginRight: '10px' }}>
                ${product.salePrice}
              </span>
              <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '1.5rem' }}>
                ${product.price}
              </span>
            </div>
          ) : (
            <span style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>${product.price}</span>
          )}
        </div>

        {/* Selección de tallas */}
        <div style={{ marginBottom: '20px' }}>
          <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Tallas:</span>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button style={sizeButtonStyle}>S</button>
            <button style={sizeButtonStyle}>M</button>
            <button style={sizeButtonStyle}>L</button>
            <button style={sizeButtonStyle}>XL</button>
            <button style={sizeButtonStyle}>XXL</button>
          </div>
        </div>

        {/* Botón de agregar al carrito */}
        <button
          style={{
            padding: '15px 20px',
            fontSize: '1rem',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
            maxWidth: '400px',
          }}
          onClick={() => {
            addToCart(product); // Agrega el producto al carrito
          }}
        >
          Agregar al carrito
        </button>
      </div>

      {/* Estilos responsivos */}
      <style>
        {`
          .product-details {
            display: flex;
            flex-direction: column;
            padding: 20px;
            justify-content: center;
            align-items: center;
            gap: 30px;
          }

          .product-image {
            flex: 1;
            text-align: center;
            max-width: 100%;
          }

          .product-info {
            flex: 1;
            max-width: 400px;
          }

          @media (min-width: 768px) {
            .product-details {
              flex-direction: row;
              align-items: flex-start;
              gap: 40px;
            }

            .product-info {
              text-align: left;
            }

            .product-image {
              margin-right: 20px;
            }
          }

          @media (min-width: 1024px) {
            .product-details {
              gap: 60px;
            }
          }
        `}
      </style>
    </div>
  );
}

// Estilo para los botones de talla
const sizeButtonStyle = {
  padding: '10px 20px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  cursor: 'pointer',
  backgroundColor: '#f9f9f9',
  fontWeight: 'bold',
};

export default ProductDetails;
