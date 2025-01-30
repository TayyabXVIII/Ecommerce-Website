import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { reduceStock } from "../redux/productSlice";
import { useNavigate } from "react-router-dom";


function Checkout() {
  const cart = useSelector(state => state.cart.items);
  const totalAmount = cart.reduce((total,item) => total + item.totalPrice,0)
  console.log(cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    cart.forEach(item => {
      dispatch(reduceStock({ id: item.id, quantity: item.quantity }));
    });
    dispatch(clearCart());
    alert("Payment successful!");
  };
  const cancelBtn = () =>{
    dispatch(clearCart())
    navigate('/products');
  }

  return (
    
      <div className="checkout">
      <h2>Checkout</h2>
      {cart.map(item => (
        <div key={item.id } style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
          <img 
            src={item.image} 
            alt={item.name} 
            style={{ width: "80px", height: "80px", marginRight: "10px", borderRadius: "5px" }}
          />
          <div className="checkout-details">
            <p className="checkout-name"><strong>{item.title}</strong> x {item.quantity}</p>
            <p className="checkout-price">Price: Rs. {item.totalPrice}</p>
          </div>
        </div>
        
        
      ))}
    

      <p><strong>Total Price: Rs.{totalAmount.toFixed(2)}</strong></p>
      <button onClick={handleCheckout}>Confirm Payment</button>
      <button onClick={cancelBtn}>Cancel Payment</button>

    </div>
    
  );
}

export default Checkout;