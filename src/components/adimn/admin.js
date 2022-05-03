// import { firestoreDb } from "../../services/firebase";
// import { collection, updateDoc } from "firebase/firestore";
import { useState } from "react";
import "./admin.css";

const Admin = () => {
  const [updateStock, setUpdateStock] = useState();

  const resetStock = (e) => {
    const newStock = e.target.value;
    setUpdateStock(newStock);
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
    <div>
      <h2>Administrator options</h2>
      <div>
        <h4>Set all stock to :</h4>
        <input onChange={resetStock} type="number" />
        <button onClick={checkInput}>Reset Stock</button>
      </div>
    </div>
  );
};

export default Admin;
