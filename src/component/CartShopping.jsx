import { createContext, useState, useEffect, useContext } from "react";
const cartShoppingContext = createContext({});

const initialCartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const CartShoppingContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <cartShoppingContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </cartShoppingContext.Provider>
  );
};

export default CartShoppingContextProvider;

export const useCartShoppingContext = ()=>{
  return useContext(cartShoppingContext)
}