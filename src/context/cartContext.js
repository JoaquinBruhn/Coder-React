import { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  //Cart array
  const [cart, setCart] = useState([]);

  // 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
  // CART PRODUCT FUNCTIONS
  // 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

  //Adds, updates or calls a function to remove a product to the cart, updates cartSize
  const addToCart = (prod) => {
    const alreadyIn = cart.some((el) => el.productID === prod.productID);

    //This IF vaiidates if the product already existed in the cart or not using the constant alreadyIn and decides how to procide acordingly
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

  //Removes a specific product from the cart and updates cartSize
  const removeItem = (prod) => {
    //Creates a new array filtering the removed item
    const newCart = cart.filter((el) => {
      return el.productID !== prod.productID;
    });
    setCart(newCart);
  };

  //Removes all items from the cart andupdates cartSize
  const clearCart = () => {
    setCart([]);
  };

  //Developer function for checking the cart state quickly
  const checkCart = () => {
    console.log(cart);
  };
  // 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

  // 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
  // CART widget & count FUNCTIONS
  // 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

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
    console.log(total);
    return total;
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
