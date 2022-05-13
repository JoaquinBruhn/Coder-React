import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Timestamp } from "firebase/firestore";
import CartContext from "../../context/cartContext";
import CardCart from "./cartCard/cartCard";

import "./cart.css";
import { startPurchase } from "../../services/firebase/firestore";

const Cart = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  const [purchaseState, setpurchaseState] = useState("not made");
  const [purchaseReceipt, setPurchaseReceipt] = useState("error");
  const [missingStock, setMissingStock] = useState([]);

  const makePurchase = () => {
    setpurchaseState("processing");
    const objOrder = {
      items: cart,
      buyer: {
        name: "joaquin",
        phone: "987654321",
        email: "email@gmail.com",
      },
      total: totalPrice(),
      date: Timestamp.fromDate(new Date()),
    };

    const purchaseIds = cart.map((prod) => prod.productID);

    startPurchase(objOrder, purchaseIds)
      .then((id) => {
        console.log(id);
        setPurchaseReceipt(id);
      })
      .catch((error) => {
        console.log(error);
        setMissingStock(error.OOSproducts);
        setPurchaseReceipt("Missing stock");
      })
      .finally(() => {
        clearCart();
        setpurchaseState("done");
      });
  };

  if (purchaseState === "not made") {
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
            <button onClick={makePurchase}>Finish Purchase</button>
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
  }

  if (purchaseState === "processing") {
    return (
      <div>
        <h2>Your order is being processed . . .</h2>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (purchaseState === "done") {
    return (
      <div>
        {purchaseReceipt !== "Missing stock" ? (
          <h2>
            Thanks for your purchase, your receipt number is: {purchaseReceipt}{" "}
          </h2>
        ) : (
          <div>
            <h2>
              Error: {purchaseReceipt}, the following items are out of stock
            </h2>
            <ul>
              {missingStock.map((prod) => {
                return <li key={prod.productID}>{prod.productName}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
};

export default Cart;
