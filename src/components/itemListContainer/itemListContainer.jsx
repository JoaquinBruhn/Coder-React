import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./itemList/itemList"
import {bringCategory, bringList} from "../asyncmock"

import "./itemListContainer.css"

const ItemListContainer = ({mensaje})=>{
    
    const[products, setProducts]= useState(undefined)

    const {category} = useParams()
    
    useEffect(()=>{
        setProducts(undefined)
        if(category){
            bringCategory(category).then((res)=>{setProducts(res)}).catch((err)=>{console.log(err)})
        }else{
            bringList().then((res)=>{setProducts(res)}).catch((err)=>{console.log(err)})
        }
    }, [category])
    


    return(
        <div className="item-list-container">
            {mensaje ? <h1>Este es el mensaje: "{mensaje}"</h1> : null}
            {products===undefined?<h1>Loading ...</h1>:<ItemList productList={products} />}
        </div>
    )
}

export default ItemListContainer