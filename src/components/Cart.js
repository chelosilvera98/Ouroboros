import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function Cart({ cart, updateCartItemQuantity, removeFromCart }) {
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  if (!cart || cart.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Carrito de compras</h2>
        <p>El carrito está vacío.</p>
        <button
          onClick={() => navigate('/')} // Redirige a la página principal
          style={{
            padding: '10px 20px',
            backgroundColor: '#000',
            color: '#FFF',
            cursor: 'pointer',
            border: 'none',
            borderRadius: '5px',
            marginTop: '20px',
          }}
        >
          CONTINUE SHOPPING
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '1.8rem' }}>Carrito de compras</h2>
      <div style={{ width: '90%', maxWidth: '800px', margin: '0 auto' }}>
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            {/* Imagen del producto */}
            <div className="cart-item-image">
              <img
                src={item.image || '/images/tshirts/placeholder.png'}
                alt={item.name || 'Product Image'}
              />
            </div>

            {/* Detalles del producto */}
            <div className="cart-item-info">
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-details">Talle: {item.size || 'N/A'}</p>
              <p className="cart-item-price">Precio: ${item.price}</p>
            </div>

            {/* Cantidad y acciones */}
            <div className="cart-item-actions">
              <div className="cart-item-quantity">
                <button
                  onClick={() => updateCartItemQuantity(index, Math.max(1, item.quantity - 1))}
                  className="cart-button"
                >
                  -
                </button>
                <span className="cart-quantity">{item.quantity}</span>
                <button
                  onClick={() => updateCartItemQuantity(index, item.quantity + 1)}
                  className="cart-button"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="cart-remove-button"
              >
                REMOVE
              </button>
            </div>
          </div>
        ))}

        {/* Botones de Checkout */}
        <div style={{ marginTop: '30px' }}>
          <button className="checkout-button">CHECK OUT</button>
          <button
            className="continue-shopping-button"
            onClick={() => navigate('/')} // Redirige a la página principal
          >
            CONTINUE SHOPPING
          </button>
        </div>
      </div>

      {/* Estilos */}
      <style>
        {`
          .cart-item {
            display: grid;
            grid-template-columns: 100px auto auto;
            gap: 20px;
            align-items: center;
            margin-bottom: 20px;
            padding: 15px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #f9f9f9;
          }

          .cart-item-image img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border: 1px solid #ddd;
            border-radius: 8px;
          }

          .cart-item-info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .cart-item-name {
            font-weight: bold;
            font-size: 1rem;
            margin-bottom: 5px;
          }

          .cart-item-details {
            font-size: 0.9rem;
            color: #666;
            margin-bottom: 5px;
          }

          .cart-item-price {
            font-weight: bold;
            font-size: 1rem;
            color: #333;
          }

          .cart-item-actions {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .cart-item-quantity {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
          }

          .cart-button {
            padding: 5px 10px;
            background-color: #000;
            color: #fff;
            border: none;
            cursor: pointer;
            border-radius: 4px;
            margin: 0 5px;
            font-size: 0.9rem;
          }

          .cart-quantity {
            font-weight: bold;
            font-size: 1rem;
          }

          .cart-remove-button {
            background-color: transparent;
            border: none;
            color: #FF0000;
            cursor: pointer;
            font-size: 0.9rem;
          }

          .checkout-button,
          .continue-shopping-button {
            margin-top: 10px;
            padding: 10px 20px;
            font-size: 1rem;
            cursor: pointer;
            width: 100%;
            border-radius: 5px;
          }

          .checkout-button {
            background-color: #000;
            color: #FFF;
            border: none;
            margin-bottom: 10px;
          }

          .continue-shopping-button {
            background-color: #FFF;
            color: #000;
            border: 1px solid #000;
          }

          /* Estilos responsivos */
          @media (max-width: 768px) {
            .cart-item {
              grid-template-columns: 1fr;
              text-align: center;
            }

            .cart-item-info,
            .cart-item-actions {
              text-align: center;
            }

            .cart-item-quantity {
              justify-content: center;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Cart;
