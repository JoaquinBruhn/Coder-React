import { useEffect, useState } from "react";
import ItemDetail from "./itemDetail/itemDetail";
import { bringDetail } from "../asyncmock";

import "./itemDetailContainer.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState("not loaded");
  const detailedProduct = useParams()

  useEffect(() => {
    bringDetail(detailedProduct)
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [detailedProduct]);

  return (
    <div className="itemDetailContainer">
      <h1>Product detail</h1>
      {product === "not loaded" ? <h1>Loading ...</h1> : <ItemDetail productDetail={product} />}
    </div>
  );
};

export default ItemDetailContainer;
