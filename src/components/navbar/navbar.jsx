import { NavLink } from "react-router-dom"
import CartWidget from "./cart/cartWidget"
import "./navbar.css"

const Navbar = ()=>{
    return(
        <div className="navbar">
            <NavLink className="logo" to="/">
                <h1 >ataraxia</h1>
            </NavLink>
            <div className="menu">
                <NavLink to="/category/tops">Top</NavLink>
                <NavLink to="/category/pants">Waist</NavLink>                
                <NavLink to="/category/shoes">Shoes</NavLink>
                <CartWidget/>
            </div>
        </div>
    )
}
export default Navbar