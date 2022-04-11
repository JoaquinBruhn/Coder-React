import { useEffect, useState } from "react";
import ItemDetail from "./itemDetail/itemDetail";
import { bringDetail } from "../asyncmock";

import "./itemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState("not loaded");

  useEffect(() => {
    bringDetail()
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [product]);

  return (
    <div className="itemDetailContainer">
      <h1>Product detail</h1>
      {product === "not loaded" ? <h1>Loading ...</h1> : <ItemDetail productDetail={product} />}
    </div>
  );
};

export default ItemDetailContainer;
