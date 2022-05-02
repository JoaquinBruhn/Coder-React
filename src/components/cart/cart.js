import { useContext } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase";
import CartContext from "../../context/cartContext";
import CardCart from "./cartCard/cartCard";

import "./cart.css";

const Cart = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  const uploadFB = () => {
    const objOrder = {
      items: cart,
      buyer: {
        name: "joaquin",
        phone: "987654321",
        email: "email@gmail.com",
      },
      total: totalPrice(),
      date: new Date(),
    };

    const userRef = collection(firestoreDb, "order");

    addDoc(userRef, objOrder).then((response) => {
      console.log(response.id);
    });
  };

  return (
    <>
      <h1>This is the cart component</h1>
      {cart.length > 0 ? (
        <div className="product-cartContainer">
          {cart.map((el) => {
            return <CardCart product={el} key={el.productID} />;
          })}
          <h4>Total: ${totalPrice()}</h4>
          <button onClick={clearCart}>Clear cart</button>
          <button onClick={uploadFB}>Testing upload</button>
        </div>
      ) : (
        <div>
          <h2>The cart is empty</h2>
          <button>
            <Link to={"/"}>Back to the shop</Link>
          </button>
        </div>
      )}
      <br />
    </>
  );
};

export default Cart;
