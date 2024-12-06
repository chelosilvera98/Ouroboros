import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Logo</h1>
      </Link>
      <nav>
      <Link to="#" style={{ margin: '0 10px', textDecoration: 'none' }}>Lookbook</Link>
      <Link to="#" style={{ margin: '0 10px', textDecoration: 'none' }}>Info</Link>
      </nav>
    </header>
  );
}

export default Header;