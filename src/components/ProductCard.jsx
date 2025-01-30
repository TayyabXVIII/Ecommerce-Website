
function ProductCard({ product }) {
    return (
      <div  className="product-card">
        <img src={product.image} alt={product.title} style={{ width: "80px", height: "80px", marginRight: "10px", borderRadius: "5px" }} />
        <h3>{product.title}</h3>
        <p>Rs. {product.price}</p>
 
      </div>
    );
  }
  
  export default ProductCard;