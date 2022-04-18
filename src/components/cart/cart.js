import { useContext } from "react";
import CartContext from "../../context/cartContext";
import CustOnClick from "../../tools/button";

import "./cart.css";

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  return (
    <>
      <h1>This is the cart component</h1>
      {cart.length > 0 ? (
        <div className="product-cartContainer">
          {cart.map((el) => {
            return (
              <div className="product-cartCard" key={el.productID}>
                <div>
                  <h4>{el.productName}</h4>
                  <p>Price: ${el.price}</p>
                  <p>Amount: {el.quantity}</p>
                  <CustOnClick func={removeItem} message="Remove from cart" param={el} />
                </div>
                <div>
                  <img className="product-cartIMG" alt={el.productName} src={el.pictureURL} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h2>The cart is epmty</h2>
      )}
      <br />
      <button onClick={clearCart}>Clear cart</button>
    </>
  );
};

export default Cart;
