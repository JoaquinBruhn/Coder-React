import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../itemCount/itemCount";
import "./itemDetail.css";

const ItemDetail = ({ productDetail }) => {
  const [count, setCount] = useState(1);
  const [readyToBuy, setReadyToBuy] = useState(false);
  const [addedProduct, setAddedProduct] = useState(undefined)

  const lockAmount = () => {
    if(!readyToBuy){
      const prod = productDetail
      prod.quantity=count
      setAddedProduct(prod)
    }
    setReadyToBuy(!readyToBuy);
  };

  const onAdd = () => {
    setCount(count + 1);
  };

  const onSubtract = () => {
    setCount(count - 1);
  };

  return (
    <div className="item-detail">
      <h4>{productDetail.productName}</h4>
      <div>
        <img alt={productDetail.productName} src={productDetail.pictureURL} />
        <p className="detail-description">{productDetail.description}</p>
        <p className="detail-info">price: {productDetail.price}</p>
        <p className="detail-info">Avaliable Size: {productDetail.size}</p>
        <p className="detail-info">remaining in stock: {productDetail.stock}</p>
      </div>
      <div>
        {readyToBuy?<h3>You have selected {count}.</h3>:<ItemCount onAdd={onAdd} onSubtract={onSubtract} count={count} stock={productDetail.stock} />}
        <button onClick={lockAmount}>{readyToBuy?"change amount":"select amount"}</button>
        {readyToBuy? <button><Link to={"/cart"}>Go to the cart</Link></button>:null}
      </div>
    </div>
  );
};

export default ItemDetail;
