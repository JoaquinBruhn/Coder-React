// import { firestoreDb } from "../../services/firebase";
// import { collection, updateDoc } from "firebase/firestore";
import { useState } from "react";
import "./admin.css";

const Admin = () => {
  const [updateStock, setUpdateStock] = useState();

  const resetStock = (e) => {
    let newStock = e.target.value;
    if (newStock < 0) {
      newStock = 0;
      setUpdateStock(newStock);
    } else if (newStock > 99) {
      newStock = 99;
      setUpdateStock(newStock);
    } else {
      setUpdateStock(newStock);
    }
  };

  //   const rechargeStock = () => {
  //     const docRef = collection(firestoreDb, "products");

  //     const fieldToUpdate = {
  //       stock: updateStock,
  //     };

  //   };

  const checkInput = () => {
    console.log(updateStock);
  };

  return (
    <div className="admin-container">
      <h2>Administrator options</h2>
      <div>
        <h4>Set all stock to :</h4>
        <input onChange={resetStock} min={1} max={99} type="number" />
        <button onClick={checkInput}>Reset Stock</button>
      </div>
    </div>
  );
};

export default Admin;
