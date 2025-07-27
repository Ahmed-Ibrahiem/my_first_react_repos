import { useContext, useEffect, useState } from "react";
import styles from "./Cart.module.css";
import ItemElement from "./ItemElement";
import { useCartShoppingContext } from "../CartShopping";

const Cart = () => {
  const [cart_closed, setCart_closed] = useState(true);
  const { cartItems, setCartItems } = useCartShoppingContext();
  const close_cart_event = () => {
    cart_closed ? setCart_closed(false) : setCart_closed(true);
  };


  return (
    <div className={cart_closed ? styles.cart_closed : styles.cart_container}>
      <button
        className={styles.close_cart_btn}
        onClick={() => close_cart_event()}
      >
        {cart_closed ? (
          <i className="fa-solid fa-cart-shopping"></i>
        ) : (
          <i className="fa-solid fa-angle-left"></i>
        )}
      </button>
      <div className={styles.cart}>
        <div className={styles.top_cart}>
          <h2>
            Cart: <span>{cartItems.length}</span>
          </h2>
        </div>
        <div className={styles.body_cart}>
          {cartItems.map((item, index) => {
            return <ItemElement key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
