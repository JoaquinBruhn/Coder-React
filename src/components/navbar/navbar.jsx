import Cart from "./cart/cart"
import "./navbar.css"

const Navbar = ()=>{
    return(
        <div className="navbar">
            <h2 className="logo">ataraxia</h2>
            <div className="menu">
                <p>remeras</p>
                <p>pantalones</p>
                <p>accesorios</p>
                <p>abrigos</p>
                <Cart/>
            </div>
        </div>
    )
}
export default Navbar