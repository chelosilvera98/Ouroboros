import { Link } from 'react-router-dom';

function Footer({ cartCount }) {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>ALL SALES FINAL &copy; 2024, Born From Pain</p>
      <div className="cart-icon" style={styles.cartIcon}>
        <Link to="/cart" style={styles.link}>
          <img
            src="../images/carrito-de-compras.png"
            alt="Cart Icon"
            style={styles.image}
          />{' '}
          (<span style={styles.cartCount}>{cartCount}</span>)
        </Link>
      </div>

      {/* Media queries */}
      <style>
        {`
          @media (max-width: 768px) {
            footer {
              font-size: 14px; /* Reduce el tamaño del texto en pantallas pequeñas */
              padding: 10px 20px;
            }

            .cart-icon img {
              width: 16px; /* Icono más pequeño en pantallas pequeñas */
              height: 16px;
            }
          }
        `}
      </style>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '1rem 0',
    backgroundColor: 'rgba(241, 241, 241, 0.8)',
    position: 'sticky', // Sticky para que se mantenga visible al scrollear
    bottom: 0, // Se pega al borde inferior
    width: '100%',
    backdropFilter: 'blur(5px)',
    zIndex: 10,
  },
  text: {
    margin: 0,
  },
  cartIcon: {
    display: 'inline-block',
    marginLeft: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  image: {
    width: '20px',
    height: '20px',
    verticalAlign: 'middle',
  },
  cartCount: {
    fontWeight: 'bold',
    color: 'black',
  },
};

export default Footer;
