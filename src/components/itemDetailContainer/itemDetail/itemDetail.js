import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../context/cartContext";
import ItemCount from "../../itemCount/itemCount";
import "./itemDetail.css";

const ItemDetail = ({ productDetail }) => {
  const { addToCart, getQuantityInCart } = useContext(CartContext);

  const [readyToBuy, setReadyToBuy] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    let initialCount = getQuantityInCart(productDetail.productID);
    if (initialCount !== undefined) {
      setCount(initialCount);
      setReadyToBuy(true);
    }
  }, []); //eslint-disable-line

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

  const imgStyle = {
    backgroundImage: "url(" + productDetail.pictureURL + ")",
  };

  return (
    <div className="item-detail">
      <h4>{productDetail.productName}</h4>
      <div>
        <div style={imgStyle} className="IDC-product-image" />
        <p className="detail-description">{productDetail.description}</p>
        <p className="detail-info">price: ${productDetail.price}</p>
        <p className="detail-info">Avaliable Size: {productDetail.size}</p>
        <p className="detail-info">remaining in stock: {productDetail.stock}</p>
      </div>
      {productDetail.stock > 0 ? (
        <div>
          {readyToBuy ? (
            <h3>You have selected {count}.</h3>
          ) : (
            <ItemCount onAdd={onAdd} onSubtract={onSubtract} count={count} stock={productDetail.stock} />
          )}
          <button className="controller-buttons" onClick={lockAmount}>
            {readyToBuy ? "change amount" : "select amount"}
          </button>
          <div>
            {readyToBuy ? (
              <>
                <button className="controller-buttons">
                  <Link to={"/cart"}>Finsish my purchase</Link>
                </button>
              </>
            ) : null}
            <button className="controller-buttons">
              <Link to={"/"}>Back to the shop</Link>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3>Out of stock</h3>
          <h3>Please try again later</h3>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
