import { useState } from "react";
import ItemCount from "../../itemCount/itemCount";
import "./itemDetail.css";

const ItemDetail = ({ productDetail }) => {
  console.log(productDetail);
  const [count, setCount] = useState(1);

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
    </div>
  );
};

export default ItemDetail;
