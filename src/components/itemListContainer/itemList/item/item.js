import "./item.css";

const Item = ({ product }) => {
  return (
    <div className="item-card">
      <h4>{product.productName}</h4>
      <div>
        <img alt={product.productName} src={product.pictureURL} />
        <p>price: ${product.price}</p>
        <p>remaining in stock: {product.stock}</p>
        <button>more info</button>
      </div>
    </div>
  );
};

export default Item;
