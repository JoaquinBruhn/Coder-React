import { useEffect, useState } from "react";
import ItemDetail from "./itemDetail/itemDetail";
import { getDoc, doc } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/index";
import "./itemDetailContainer.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState("not loaded");
  const { itemId } = useParams();

  useEffect(() => {
    getDoc(doc(firestoreDb, "products", itemId))
      .then((response) => {
        const prod = { productID: response.id, ...response.data() };
        setProduct(prod);
      })
      .catch((err) => console.log(err));
  }, [itemId]);

  return (
    <div className="itemDetailContainer">
      <h1>Product detail</h1>
      {product === "not loaded" ? <h1>Loading ...</h1> : <ItemDetail productDetail={product} />}
    </div>
  );
};

export default ItemDetailContainer;
