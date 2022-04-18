import { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
  // CART FUNCTIONS
  // 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

  // this may need reworking
  const addToCart = (prod) => {
    const alreadyIn = cart.findIndex((el) => el.productID === prod.productID);
    if (alreadyIn < 0) {
      setCart([...cart, prod]);
    } else {
      if (prod.quantity > 0) {
        const newCart = cart;
        newCart[alreadyIn].quantity = prod.quantity;
        setCart(newCart);
      } else {
        removeItem(prod);
      }
    }
  };

  const removeItem = (prod) => {
    const newCart = cart.filter((el) => {
      return el.productID !== prod.productID;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const checkCart = () => {
    console.log(cart);
  };
  // 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        checkCart,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
