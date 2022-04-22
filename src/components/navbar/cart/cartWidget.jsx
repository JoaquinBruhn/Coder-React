import { useContext, useEffect, useState } from "react"
import {BsFillCartCheckFill} from "react-icons/bs"
import { Link } from "react-router-dom"
import CartContext from "../../../context/cartContext"
import "./cartWidget.css"

const CartWidget = ()=>{

    const [classStatus, setClassStatus]= useState(false)
    const { cart, widgetUpdate } = useContext(CartContext)

    useEffect(()=>{
        if(cart.length!==0){
            setClassStatus(true)
        }else{
            setClassStatus(false)
        }
    },[cart])

    return(
        <Link to="/cart" className={classStatus?"cart-widget-active":"cart-widget-inactive"}><h4> <BsFillCartCheckFill/> {widgetUpdate()}</h4></Link>
    )
}

export default CartWidget