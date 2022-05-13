import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./itemList/itemList"
import { loadProducts } from "../../services/firebase/firestore"
import "./itemListContainer.css"

const ItemListContainer = ({mensaje})=>{
    
    const[products, setProducts]= useState(undefined)

    const {categoryId} = useParams()
    
    useEffect(()=>{
        setProducts(undefined)
        let activeComponentFlag = true
        loadProducts(categoryId).then((res)=>{
            if(activeComponentFlag){
                setProducts(res)
            }  
        })
        .catch(err=>{
            if(activeComponentFlag){
                console.log(err)
            }  
        })

        return()=>{
            activeComponentFlag = false
        }
    }, [categoryId])
    


    return(
        <div className="item-list-container">
            {products===undefined?<h1>Loading ...</h1>:<ItemList productList={products} />}
        </div>
    )
}

export default ItemListContainer