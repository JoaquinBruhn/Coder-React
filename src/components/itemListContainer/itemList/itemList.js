import Item from "./item/item";
import "./itemList.css";

const ItemList = ({ productList }) => {
  return (
    <div className="item-list">
      <div>
        {productList.map((el) => (
          <Item key={el.productID} product={el} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
