import { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  //Cart array
  const [cart, setCart] = useState([]);
  //Amount of items in the cart for the Widget on Navbar
  const [cartSize, setCartSize] = useState(0);

  // 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
  // CART PRODUCT FUNCTIONS
  // 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

  //Adds, updates or calls a function to remove a product to the cart, updates cartSize
  const addToCart = (prod) => {
    const alreadyIn = cart.findIndex((el) => el.productID === prod.productID);
    if (alreadyIn < 0) {
      setCart([...cart, prod]);
      setCartSize(cartSize + 1);
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

  //Removes a specific product from the cart and updates cartSize
  const removeItem = (prod) => {
    const newCart = cart.filter((el) => {
      return el.productID !== prod.productID;
    });
    setCart(newCart);
    setCartSize(newCart.length);
  };

  //Removes all items from the cart andupdates cartSize
  const clearCart = () => {
    setCart([]);
    setCartSize(0);
  };

  //Developer function for checking the cart state quickly
  const checkCart = () => {
    console.log(cart);
  };
  // 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

  // 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
  // CART widget & count FUNCTIONS
  // 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

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
        cartSize,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
