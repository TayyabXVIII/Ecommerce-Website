import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar(){
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    return(
        <nav className="navbar">
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/cart">Cart<span>({totalQuantity})</span></Link>
        </nav>
    )
}

export default Navbar;