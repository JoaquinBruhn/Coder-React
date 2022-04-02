import data from "../asyncmock"

import "./itemListContainer.css"
import ItemList from "./itemList/itemList"

const ItemListContainer = ({mensaje})=>{

    return(
        <>
            <h1>Este es el mensaje: "{mensaje}"</h1>
            <ItemList productList={data} />
        </>
    )
}

export default ItemListContainer