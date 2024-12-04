function Product({ image, name }) {
    return (
      <div style={{ textAlign: 'center', margin: '10px' }}>
        <img src={image} alt={name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
        <p>{name}</p>
      </div>
    );
  }
  
  export default Product;