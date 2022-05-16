import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../context/cartContext";
import CustOnClick from "../../../tools/button";
import "./cartCard.css";

const CardCart = ({ product }) => {
  const { removeItem } = useContext(CartContext);

  const imgStyle = {
    backgroundImage: "url(" + product.pictureURL + ")",
  };

  return (
    <div className="product-cartCard">
      <div>
        <h4>{product.productName}</h4>
        <p>Amount: {product.quantity}</p>
        <p>Price for each: ${product.price}</p>
        <p>Priece for all: ${product.price * product.quantity}</p>
        <CustOnClick func={removeItem} message="Remove from cart" param={product} look="remove-item" />
      </div>
      <div>
        <Link to={`/item/${product.productID}`}>
          <div style={imgStyle} className="product-cartIMG" />
        </Link>
      </div>
    </div>
  );
};

export default CardCart;
