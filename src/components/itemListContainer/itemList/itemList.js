import Item from "./item/item"


const ItemList =({productList})=>{
    return(
        <>
        {productList.map((el)=><Item key={el.productID} product={el} />)}
        </>
    )
}

export default ItemList