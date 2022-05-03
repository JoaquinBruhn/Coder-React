import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import CartContext from "../../context/cartContext"
import CartWidget from "./cart/cartWidget"
import { firestoreDb } from "../../services/firebase"
import {getDocs, collection, query, orderBy} from "firebase/firestore"
import "./navbar.css"

const Navbar = ()=>{
    const [categories, setCategories]= useState([])
    const{checkCart}=useContext(CartContext)

    useEffect(()=>{
        getDocs(query(collection(firestoreDb, "categories"),orderBy("order", "asc"))).then((response)=>{
            const cat = response.docs.map((doc)=>{
                return{catId:doc.id, ...doc.data()}
            })
            setCategories(cat)
        }).catch(err=>{console.log(err);})
    },[])

    return(
        <div className="navbar">
            <NavLink className="logo" to="/">
                <h1 >ataraxia</h1>
            </NavLink>
            <div className="menu">
                <button onClick={checkCart}>check cart</button>
                {categories.length > 0?
                    categories.map((el)=>{
                    return <NavLink to={"/category/"+ el.catId} key={el.catId} >{el.categoryName}</NavLink>
                    })
                :
                    null}
                <NavLink to={"/admin"}>Admin</NavLink>
                <CartWidget/>
            </div>
        </div>
    )
}
export default Navbar