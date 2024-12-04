function Header() {
    return (
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px' }}>
        <h1 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Logo</h1>
        <nav>
          <a href="#" style={{ margin: '0 10px', textDecoration: 'none' }}>Lookbook</a>
          <a href="#" style={{ margin: '0 10px', textDecoration: 'none' }}>Info</a>
        </nav>
      </header>
    );
  }
  
  export default Header;