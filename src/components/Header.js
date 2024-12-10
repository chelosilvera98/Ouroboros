import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'center', padding: '10px 20px' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <img 
          src="/images/ouroboros_logo.png" 
          alt="Logo" 
          style={{ height: '50px', marginRight: '10px', marginTop: '10px' }}
          onError={(e) => { 
            e.target.onerror = null; 
            e.target.style.display = 'none'; 
            e.target.parentNode.insertAdjacentHTML('beforeend', '<h1 style="font-family: Arial, sans-serif; font-weight: bold;">Logo</h1>');
          }}
        />
      </Link>
      {/* <nav>
      <Link to="#" style={{ margin: '0 10px', textDecoration: 'none' }}>Lookbook</Link>
      <Link to="#" style={{ margin: '0 10px', textDecoration: 'none' }}>Info</Link>
      </nav> */}
    </header>
  );
}

export default Header;