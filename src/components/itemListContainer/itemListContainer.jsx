import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./itemList/itemList"
import { collection, getDocs, query, where, orderBy } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"
import "./itemListContainer.css"

const ItemListContainer = ({mensaje})=>{
    
    const[products, setProducts]= useState(undefined)

    const {categoryId} = useParams()
    
    useEffect(()=>{
        setProducts(undefined)
        if(categoryId){
            getDocs(query(collection(firestoreDb, "products"),where("category","==", categoryId))).then(response=>{
                const prods = response.docs.map(doc=>{
                    return{productID:doc.id, ...doc.data()}
                })
                setProducts(prods)
            }).catch(err=>{console.log(err);})

        }else{
            getDocs(query(collection(firestoreDb, "products"),orderBy("productName", "asc"))).then(response=>{
                const prods = response.docs.map(doc=>{
                    return{productID:doc.id, ...doc.data()}
                })
                setProducts(prods)
            }).catch(err=>{console.log(err);})
            
        }
    }, [categoryId])
    


    return(
        <div className="item-list-container">
            {mensaje ? <h1>Este es el mensaje: "{mensaje}"</h1> : null}
            {products===undefined?<h1>Loading ...</h1>:<ItemList productList={products} />}
        </div>
    )
}

export default ItemListContainer