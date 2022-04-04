import { useState } from "react"
import ItemCount from "../../../itemCount/itemCount"


const Item = ({product})=>{

    const[count, setCount]=useState(1)

    const onAdd = ()=>{
        setCount(count+1)
    }

    const onSubtract = ()=>{
        setCount(count-1)
    }

    return(
        <div className="item-card">
            <h4>{product.productName}</h4>
            <div>
                <img src={product.pictureURL}/>
                <p>price:{product.price}</p>
                <p>remaining in stock:{product.stock}</p>
                <button>more info</button>
            </div>
            <ItemCount onAdd={onAdd} onSubtract={onSubtract} count={count} stock={product.stock} />
        </div>
    )
}

export default Item