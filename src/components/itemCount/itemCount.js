
import './itemCount.css'

const ItemCount = ({count, onAdd, onSubtract, stock})=>{

    return(
    <div className='item-count'>
        {count<=1? <button>-</button> :<button onClick={onSubtract}>-</button>}
        <h3>{count}</h3>
        {count>=stock? <button>+</button> :<button onClick={onAdd}>+</button>}
    </div>)
}

export default ItemCount
