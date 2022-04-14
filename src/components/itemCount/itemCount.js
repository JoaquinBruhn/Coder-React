
import './itemCount.css'

const ItemCount = ({count, onAdd, onSubtract, stock})=>{

    return(
    <div className='item-count'>
        {count<=1? <button className='count-inactive'>-</button> :<button className='count-active' onClick={onSubtract}>-</button>}
        <h3>{count}</h3>
        {count>=stock? <button className='count-inactive'>+</button> :<button className='count-active' onClick={onAdd}>+</button>}
    </div>)
}

export default ItemCount
