import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ product }) => {
  const imgStyle = {
    backgroundImage: "url(" + product.pictureURL + ")",
  };

  return (
    <div className="item-card">
      <h4>{product.productName}</h4>
      <div>
        <div style={imgStyle} className="ILC-product-image" />
        <p>price: ${product.price}</p>
        <p>remaining in stock: {product.stock}</p>
        <button>
          <Link to={`/item/${product.productID}`}>more info</Link>
        </button>
      </div>
    </div>
  );
};

export default Item;
