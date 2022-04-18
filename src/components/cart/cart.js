import { useContext } from "react";
import CartContext from "../../context/cartContext";

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  return (
    <>
      <h1>This is the cart component</h1>
      {cart.length > 0 ? (
        cart.map((el) => {
          return (
            <div key={el.productID}>
              <h4>{el.productName}</h4>
              <p>Price: ${el.price}</p>
              <p>Amount: {el.quantity}</p>
            </div>
          );
        })
      ) : (
        <h2>The cart is epmty</h2>
      )}
      <br />
      <button onClick={clearCart}>Clear cart</button>
    </>
  );
};

export default Cart;
