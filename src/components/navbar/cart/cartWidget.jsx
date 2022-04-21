import { useContext, useEffect, useState } from "react"
import {BsFillCartCheckFill} from "react-icons/bs"
import { Link } from "react-router-dom"
import CartContext from "../../../context/cartContext"
import "./cartWidget.css"

const CartWidget = ()=>{

    const [classStatus, setClassStatus]= useState(false)
    const { cartSize } = useContext(CartContext)

    useEffect(()=>{
        if(cartSize!==0){
            setClassStatus(true)
        }else{
            setClassStatus(false)
        }
    },[cartSize])

    return(
        <Link to="/cart" className={classStatus?"cart-widget-active":"cart-widget-inactive"}><h4> <BsFillCartCheckFill/> {cartSize}</h4></Link>
    )
}

export default CartWidget