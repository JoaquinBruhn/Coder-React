import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection, documentId, getDocs, query, Timestamp, where, writeBatch } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase";
import CartContext from "../../context/cartContext";
import CardCart from "./cartCard/cartCard";

import "./cart.css";

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

    const batch = writeBatch(firestoreDb);

    const collectionRef = collection(firestoreDb, "products");

    const outOfStock = [];

    getDocs(query(collectionRef, where(documentId(), "in", purchaseIds)))
      .then((response) => {
        response.docs.forEach((doc) => {
          const dataDoc = doc.data();
          const prodQuantity = cart.find((prod) => prod.productID === doc.id)?.quantity;

          if (dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
          } else {
            outOfStock.push({ productID: doc.id, ...dataDoc });
          }
        });
      })
      .then(() => {
        if (outOfStock.length === 0) {
          const ordersRef = collection(firestoreDb, "orders");
          console.log(objOrder);
          return addDoc(ordersRef, objOrder);
        } else {
          setMissingStock(outOfStock);
          return Promise.reject({ errName: "outOfStock", products: outOfStock });
        }
      })
      .then(({ id }) => {
        batch.commit();
        console.log(id);
        setPurchaseReceipt(id);
      })
      .catch((error) => {
        console.log(error);
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
          <h2>Thanks for your purchase, your receipt number is: {purchaseReceipt} </h2>
        ) : (
          <div>
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
