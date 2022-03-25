import CartWidget from "./cart/cartWidget"
import "./navbar.css"

const Navbar = ()=>{
    return(
        <div className="navbar">
            <h2 className="logo">ataraxia</h2>
            <div className="menu">
                <a href="https://www.youtube.com/">remeras</a>
                <a href="https://www.youtube.com/">pantalones</a>
                <a href="https://www.youtube.com/">accesorios</a>
                <a href="https://www.youtube.com/">abrigos</a>
                <CartWidget/>
            </div>
        </div>
    )
}
export default Navbar