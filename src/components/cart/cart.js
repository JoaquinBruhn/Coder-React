import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cartContext";
import CardCart from "./cartCard/cartCard";

import "./cart.css";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <>
      <h1>This is the cart component</h1>
      {cart.length > 0 ? (
        <div className="product-cartContainer">
          {cart.map((el) => {
            return <CardCart product={el} key={el.productID} />;
          })}
        </div>
      ) : (
        <h2>The cart is empty</h2>
      )}
      <br />
      <button onClick={clearCart}>Clear cart</button>
      <button>
        <Link to={"/"}>Back to the shop</Link>
      </button>
    </>
  );
};

export default Cart;
