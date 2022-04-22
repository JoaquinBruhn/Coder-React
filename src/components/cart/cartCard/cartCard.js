import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../context/cartContext";
import CustOnClick from "../../../tools/button";
import "./cartCard.css";

const CardCart = ({ product }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="product-cartCard">
      <div>
        <h4>{product.productName}</h4>
        <p>Amount: {product.quantity}</p>
        <p>Price each: ${product.price}</p>
        <p>Price total: ${product.price * product.quantity}</p>
        <CustOnClick func={removeItem} message="Remove from cart" param={product} />
      </div>
      <div>
        <Link to={`/item/${product.productID}`}>
          <img className="product-cartIMG" alt={product.productName} src={product.pictureURL} />
        </Link>
      </div>
    </div>
  );
};

export default CardCart;
