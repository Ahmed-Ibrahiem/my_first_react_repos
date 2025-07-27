import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CartShoppingContextProvider from "./component/CartShopping.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartShoppingContextProvider>
      <App />
    </CartShoppingContextProvider>
  </StrictMode>
);
