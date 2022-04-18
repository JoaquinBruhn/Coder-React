import { useContext } from "react"
import { NavLink } from "react-router-dom"
import CartContext from "../../context/cartContext"
import CartWidget from "./cart/cartWidget"
import "./navbar.css"

const Navbar = ()=>{
    const{checkCart}=useContext(CartContext)
    return(
        <div className="navbar">
            <NavLink className="logo" to="/">
                <h1 >ataraxia</h1>
            </NavLink>
            <div className="menu">
                <button onClick={checkCart}>check cart</button>
                <NavLink to="/category/tops">Top</NavLink>
                <NavLink to="/category/pants">Waist</NavLink>                
                <NavLink to="/category/shoes">Shoes</NavLink>
                <CartWidget/>
            </div>
        </div>
    )
}
export default Navbar