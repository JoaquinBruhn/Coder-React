import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Timestamp } from "firebase/firestore";
import CartContext from "../../context/cartContext";
import CardCart from "./cartCard/cartCard";

import "./cart.css";
import { startPurchase } from "../../services/firebase/firestore";
import CartForm from "./cartForm/cartForm";

const Cart = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  const [buyerData, setBuyerData] = useState(undefined);
  const [purchaseState, setpurchaseState] = useState("not made");
  const [purchaseReceipt, setPurchaseReceipt] = useState("error");
  const [missingStock, setMissingStock] = useState([]);

  const makePurchase = () => {
    setpurchaseState("processing");
    const objOrder = {
      items: cart,
      buyer: buyerData,
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

  const editInfo = () => {
    setBuyerData(undefined);
  };

  if (purchaseState === "not made") {
    return (
      <div className="cart-not-made">
        <h1>Welcome to the cart</h1>
        {cart.length > 0 ? (
          <div className="product-cartContainer">
            {cart.map((el) => {
              return <CardCart product={el} key={el.productID} />;
            })}
            <h4>Your total price is: ${totalPrice()}</h4>
            <button className="cart-button" onClick={clearCart}>
              Clear cart
            </button>
            <div className="form-container">
              <h4>Please fill in your data to complete the purchase</h4>
              <p>(mandatory)</p>
              <CartForm buyerData={buyerData} setBuyerData={setBuyerData} />
              {buyerData ? (
                <>
                  <button className="cart-button" onClick={editInfo}>
                    Edit information
                  </button>
                  <button className="cart-button" onClick={makePurchase}>
                    Finish Purchase
                  </button>
                </>
              ) : null}
            </div>
          </div>
        ) : (
          <div>
            <h2>The cart is empty</h2>
            <button className="cart-button">
              <Link to={"/"}>Back to the shop</Link>
            </button>
          </div>
        )}
        <br />
      </div>
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
      <div className="purchase">
        {purchaseReceipt !== "Missing stock" ? (
          <div className="purchase-ticket">
            <h2>Thanks for your purchase</h2>
            <h2>Your receipt number is: {purchaseReceipt}</h2>
            <div>
              <p>Name: {buyerData.name}</p>
              <p>Email: {buyerData.email}</p>
              <p>Phone: {buyerData.phone}</p>
              <p>Address: {buyerData.address}</p>
            </div>
            <h3>If you need to contact support, please email at ataraxia@store.com</h3>
            <button className="cart-button">
              <Link to={"/"}>Back to the shop</Link>
            </button>
          </div>
        ) : (
          <div className="purchase-error">
            <h2>Error: {purchaseReceipt}, the following items are out of stock</h2>
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
