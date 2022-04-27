import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./itemList/itemList"
import { collection, getDocs, query, where } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"
import "./itemListContainer.css"

const ItemListContainer = ({mensaje})=>{
    
    const[products, setProducts]= useState(undefined)

    const {categoryParam} = useParams()
    
    useEffect(()=>{
        setProducts(undefined)
        if(categoryParam){
            getDocs(query(collection(firestoreDb, "products"),where("category","==", categoryParam))).then(response=>{
                console.log(response);
                const prods = response.docs.map(doc=>{
                    return{productID:doc.id, ...doc.data()}
                })
                setProducts(prods)
                console.log(prods);
            })
        }else{
            getDocs(collection(firestoreDb, "products")).then(response=>{
                console.log(response);
                const prods = response.docs.map(doc=>{
                    return{productID:doc.id, ...doc.data()}
                })
                setProducts(prods)
                console.log(prods);
            })

        }
    }, [categoryParam])
    


    return(
        <div className="item-list-container">
            {mensaje ? <h1>Este es el mensaje: "{mensaje}"</h1> : null}
            {products===undefined?<h1>Loading ...</h1>:<ItemList productList={products} />}
        </div>
    )
}

export default ItemListContainer