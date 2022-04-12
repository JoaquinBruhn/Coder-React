import { NavLink } from "react-router-dom";
import "./item.css";

const Item = ({ product }) => {
  return (
    <div className="item-card">
      <h4>{product.productName}</h4>
      <div>
        <img alt={product.productName} src={product.pictureURL} />
        <p>price: ${product.price}</p>
        <p>remaining in stock: {product.stock}</p>
        <button>
          <NavLink to={`/item/${product.productID}`}>more info</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Item;
