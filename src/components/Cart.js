import React from 'react';

function Cart({ cart, removeFromCart }) {
    if (!cart) {
        console.error('Cart prop is undefined or null');
        return null;
      }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div style={{ width: '90%', maxWidth: '800px', margin: '0 auto' }}> {/* Make the width responsive */}
          {cart.map((item, index) => (
            item && item.image && item.name ? ( // Ensure item is properly defined
              <div key={index} style={styles.cartItem}>
                <img
                  src={item.image || '/images/tshirts/ts7.png'}
                  alt={item.name || 'Product Image'}
                  style={{ width: '100px', height: '100px', objectFit: 'cover', aspectRatio: '1 / 1' }}
                />
                <div style={styles.itemInfo}>
                <p>{item.name || 'Unknown Product'}</p>
                  <button
                    onClick={() => removeFromCart(index)}
                    style={styles.removeButton}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            ) : null
          ))}
          <button style={styles.checkoutButton}>CHECK OUT</button>
          <button style={styles.continueShoppingButton}>CONTINUE SHOPPING</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ccc',
  },
  itemInfo: {
    flex: 1,
    paddingLeft: '20px',
  },
  removeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#FF0000',
    cursor: 'pointer',
  },
  checkoutButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#000',
    color: '#FFF',
    cursor: 'pointer',
    border: 'none',
    display: 'block',
    width: '100%',
    marginBottom: '10px',
  },
  continueShoppingButton: {
    padding: '10px 20px',
    backgroundColor: '#FFF',
    color: '#000',
    cursor: 'pointer',
    border: '1px solid #000',
    display: 'block',
    width: '100%',
  },
};

export default Cart;