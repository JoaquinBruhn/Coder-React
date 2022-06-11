import { firestoreDb } from "../../services/firebase";
import { collection, getDocs, writeBatch } from "firebase/firestore";
import { useState } from "react";
import Spinner from "../../tools/spinner/spinner";
import "./admin.css";

const Admin = () => {
  const [stockUpdate, setStockUpdate] = useState(1);
  const [updating, setUpdating] = useState(false);

  // const data = [
  //   {
  //     productName: "black t-shirt",
  //     description: "It is a black T-shirt. Generic T-shirt for use in most places.",
  //     pictureURL: "https://via.placeholder.com/350x150",
  //     category: "tops",
  //     price: 800,
  //     stock: 7,
  //     size: "m",
  //   },
  //   {
  //     productName: "red sweater",
  //     description: "It is a red sweater. Comfy for winter and family meet-ups.",
  //     pictureURL: "https://via.placeholder.com/350x150",
  //     category: "tops",
  //     price: 1100,
  //     stock: 12,
  //     size: "s",
  //   },
  //   {
  //     productName: "long sleeve blue t-shirt",
  //     description: "It is a long sleeved blue T-shirt. It's design is good for a lot of situations.",
  //     pictureURL: "https://via.placeholder.com/350x150",
  //     category: "tops",
  //     price: 900,
  //     stock: 11,
  //     size: "l",
  //   },
  //   {
  //     productName: "black shorts",
  //     description: "It is a pair of black shorts. Nice to wear on summer.",
  //     pictureURL: "https://via.placeholder.com/350x150",
  //     category: "pants",
  //     price: 600,
  //     stock: 14,
  //     size: "s",
  //   },
  //   {
  //     productName: "blue jeans",
  //     description: "It is a pair of blue jeans. Good for every situation.",
  //     pictureURL: "https://via.placeholder.com/350x150",
  //     category: "pants",
  //     price: 1200,
  //     stock: 9,
  //     size: "m",
  //   },
  //   {
  //     productName: "white socks",
  //     description: "It is a pair of white socks. Comfortable for winter.",
  //     pictureURL: "https://via.placeholder.com/350x150",
  //     category: "shoes",
  //     price: 240,
  //     stock: 13,
  //     size: "adjustable",
  //   },
  //   {
  //     productName: "black sneakers",
  //     description: "It is a pair of black sneekers. Keeps the foot comfortable on most places while looking good.",
  //     pictureURL: "https://via.placeholder.com/350x150",
  //     category: "shoes",
  //     price: 1150,
  //     stock: 7,
  //     size: "40",
  //   },
  // ];

  const refillStock = (e) => {
    let newStock = parseInt(e.target.value);
    if (newStock < 1) {
      newStock = 1;
      setStockUpdate(newStock);
    } else if (newStock > 99) {
      newStock = 99;
      setStockUpdate(newStock);
    } else {
      setStockUpdate(newStock);
    }
  };

  const rechargeStock = (stockUpdate) => {
    const colRef = collection(firestoreDb, "products");
    const batch = writeBatch(firestoreDb);

    getDocs(colRef)
      .then((response) => {
        response.docs.forEach((doc) => {
          batch.update(doc.ref, { stock: stockUpdate });
        });
      })
      .then(() => {
        batch.commit();
        setUpdating(false);
      });
  };

  const checkInput = () => {
    setUpdating(true);
    rechargeStock(stockUpdate);
  };

  return (
    <div className="admin-container">
      <h2>Administrator options</h2>
      {updating ? (
        <Spinner />
      ) : (
        <div>
          <h4>Set all stock to :</h4>
          <input onChange={refillStock} defaultValue={1} min={1} max={99} type="number" />
          <button onClick={checkInput}>Reset Stock</button>
        </div>
      )}
    </div>
  );
};

export default Admin;
