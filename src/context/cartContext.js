import { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (prod) => {
    const alreadyIn = cart.some((el) => el.productID === prod.productID);

    if (!alreadyIn) {
      setCart([...cart, prod]);
    } else {
      if (prod.quantity > 0) {
        const newCart = cart.map((cartItem) => {
          if (cartItem.productID === prod.productID) {
            const newProd = {
              ...cartItem,
              quantity: prod.quantity,
            };
            return newProd;
          } else {
            return cartItem;
          }
        });
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

  const widgetUpdate = () => {
    let count = 0;
    cart.forEach((cartItem) => {
      count += cartItem.quantity;
    });
    return count;
  };

  const getQuantityInCart = (id) => {
    return cart.find((prod) => prod.productID === id)?.quantity;
  };

  const totalPrice = () => {
    let total = 0;
    cart.forEach((prod) => {
      total += prod.price * prod.quantity;
    });
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeItem,
        clearCart,
        widgetUpdate,
        getQuantityInCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
