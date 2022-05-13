import { useEffect, useState } from "react";
import ItemDetail from "./itemDetail/itemDetail";
import "./itemDetailContainer.css";
import { useParams } from "react-router-dom";
import { loadDetail } from "../../services/firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState("not loaded");
  const { itemId } = useParams();

  useEffect(() => {
    let activeComponentFlag = true
    loadDetail(itemId)
    .then(res=>{
      if(activeComponentFlag){
        setProduct(res)
      }
    })
    .catch(err=>{
      if(activeComponentFlag){
        console.log(err);
      }
    })

    return ()=>{
      activeComponentFlag = false
    }
  }, [itemId]);

  return (
    <div className="itemDetailContainer">
      <h1>Product detail</h1>
      {product === "not loaded" ? <h1>Loading ...</h1> : <ItemDetail productDetail={product} />}
    </div>
  );
};

export default ItemDetailContainer;
