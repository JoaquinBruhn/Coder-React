import { useContext, useEffect } from "react"
import {BsFillCartCheckFill} from "react-icons/bs"
import { Link } from "react-router-dom"
import CartContext from "../../../context/cartContext"
import "./cartWidget.css"

const CartWidget = ()=>{

    const { cartSize } = useContext(CartContext)

    return(
        <Link to="/cart" className="cart-widget"><h4> <BsFillCartCheckFill/> {cartSize}</h4></Link>
    )
}

export default CartWidget