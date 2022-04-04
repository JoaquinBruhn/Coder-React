import {bringList} from "../asyncmock"

import "./itemListContainer.css"
import ItemList from "./itemList/itemList"
import { useEffect, useState } from "react"

const ItemListContainer = ({mensaje})=>{
    
    const[serverOkey, setServerOkey] = useState(true)
    const[products, setProducts]= useState(undefined)
    
    useEffect(()=>{
        bringList(serverOkey).then((res)=>{setProducts(res)}).catch((err)=>{console.log(err)})

    }, [])
    


    return(
        <>
            <h1>Este es el mensaje: "{mensaje}"</h1>
            {products===undefined?<h1>Loading ...</h1>:<ItemList productList={products} />}
            
        </>
    )
}

export default ItemListContainer