import { Link } from 'react-router-dom';

function Footer({ cartCount }) {
  return (
    <footer style={styles.footer}>
      <p>
        ALL SALES FINAL &copy; 2024, Born From Pain
      </p>
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
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '1rem 0',
    backgroundColor: 'rgba(241, 241, 241, 0.8)',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backdropFilter: 'blur(5px)',
    zIndex: 10,
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