import { firestoreDb } from "."
import { getDocs, getDoc, collection, doc, query, where, orderBy } from "firebase/firestore"
import { productAdapterFirestore } from "../../adapters/productAdapters"


export const loadProducts = (categoryID)=>{
    return new Promise((resolve,reject)=>{
        
        const docRef = categoryID!==undefined ?
        query(collection(firestoreDb, "products"),where("category","==", categoryID))
        :
        query(collection(firestoreDb, "products"),orderBy("productName", "asc"))

        getDocs(docRef)
        .then(response=>{
            const prods = response.docs.map((doc) => {
                return productAdapterFirestore(doc)
            });
            resolve(prods)
        })
        .catch((error)=>{
            reject(error)
        })
    })
}

export const loadDetail = (itemId)=>{
    return new Promise((resolve, reject)=>{
        const docRef = doc(firestoreDb, "products", itemId)

        getDoc(docRef)
        .then(response => {
            const prod = productAdapterFirestore(response);
            resolve(prod)
        })
        .catch((err) => {
            reject(err)
        });
    })
}