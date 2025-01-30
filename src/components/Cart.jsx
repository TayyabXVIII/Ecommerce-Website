import { useSelector, useDispatch } from 'react-redux';
import { adjustQuantity, removeFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    dispatch(adjustQuantity({ id, quantity }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <div>
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, Math.max(item.quantity - 1, 1))
                    
                    
                  }
                  
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            
              <Link to="/checkout">
                <button>Proceed to Checkout</button>
            </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;