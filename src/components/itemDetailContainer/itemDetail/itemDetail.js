import { useState } from "react";
import ItemCount from "../../itemCount/itemCount";
import "./itemDetail.css";

const ItemDetail = ({ productDetail }) => {
  const [count, setCount] = useState(1);
  const [readyToBuy, setReadyToBuy] = useState(false);

  const lockAmount = () => {
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
      <ItemCount onAdd={onAdd} onSubtract={onSubtract} count={count} stock={productDetail.stock} />
      <button onClick={lockAmount}>select amount</button>
    </div>
  );
};

export default ItemDetail;
