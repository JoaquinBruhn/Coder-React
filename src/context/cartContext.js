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

    //This IF vaiidates if the product already existed in the cart or not using the constant alreadyIn and decides how to procide acordingly
    if (alreadyIn < 0) {
      setCart([...cart, prod]);
      setCartSize(cartSize + prod.quantity);
    } else {
      //If the product already exists it updates the quantity or removes the item depending on wether the quantity is being set to 0
      if (prod.quantity > 0) {
        const newCart = cart;

        //If the old quantity was more than the new one then the overall sum on the Widget´s ammount is gona be less so widgetQuant should be a negative, if it´s otherwise it´s a positive.
        const widgetQuant = -1 * cart[alreadyIn].quantity + prod.quantity;

        //updating the quantity value for the product that already existed on the cart
        newCart[alreadyIn].quantity = prod.quantity;

        setCart(newCart);
        setCartSize(cartSize + widgetQuant);
      } else {
        removeItem(prod);
      }
    }
  };

  //Removes a specific product from the cart and updates cartSize
  const removeItem = (prod) => {
    //Creates a new array filtering the removed item
    const newCart = cart.filter((el) => {
      return el.productID !== prod.productID;
    });
    setCartSize(cartSize - prod.quantity);
    setCart(newCart);
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

  const widgetOnProductUpdate = (quant, alreadyIn) => {
    const result = -1 * cart[alreadyIn].quantity + quant;
    console.log(result);
    return result;
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
        cartSize,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
