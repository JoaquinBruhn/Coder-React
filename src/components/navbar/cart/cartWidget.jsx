import {BsFillCartCheckFill} from "react-icons/bs"
import { Link } from "react-router-dom"
import "./cartWidget.css"

const CartWidget = ()=>{
    return(
        <Link to="/cart" className="cart-widget"><h4> <BsFillCartCheckFill/> 4</h4></Link>
    )
}

export default CartWidget