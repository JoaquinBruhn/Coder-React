import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../context/cartContext";
import ItemCount from "../../itemCount/itemCount";
import "./itemDetail.css";

const ItemDetail = ({ productDetail }) => {
  const { addToCart } = useContext(CartContext);

  const [count, setCount] = useState(0);
  const [readyToBuy, setReadyToBuy] = useState(false);

  const onAdd = () => {
    setCount(count + 1);
  };

  const onSubtract = () => {
    setCount(count - 1);
  };

  const lockAmount = () => {
    if (!readyToBuy) {
      const prod = productDetail;
      prod.quantity = count;
      addToCart(prod);
    }
    setReadyToBuy(!readyToBuy);
  };

  return (
    <div className="item-detail">
      <h4>{productDetail.productName}</h4>
      <div>
        <img alt={productDetail.productName} src={productDetail.pictureURL} />
        <p className="detail-description">{productDetail.description}</p>
        <p className="detail-info">price: ${productDetail.price}</p>
        <p className="detail-info">Avaliable Size: {productDetail.size}</p>
        <p className="detail-info">remaining in stock: {productDetail.stock}</p>
      </div>
      <div>
        {readyToBuy ? (
          <h3>You have selected {count}.</h3>
        ) : (
          <ItemCount onAdd={onAdd} onSubtract={onSubtract} count={count} stock={productDetail.stock} />
        )}
        <button onClick={lockAmount}>{readyToBuy ? "change amount" : "select amount"}</button>
        {readyToBuy ? (
          <button>
            <Link to={"/cart"}>Go to the cart</Link>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ItemDetail;
