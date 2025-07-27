import { useCartShoppingContext } from "../CartShopping";
import styles from "./card style.module.css";

const Add_button = ({ pro_data }) => {
  const { cartItems, setCartItems } = useCartShoppingContext();

  const handleCartItems = () => {
    setCartItems((prev) => [...prev, pro_data]);
  };
  const isInCart = cartItems.some((item) => item.id === pro_data.id);
  
  if (isInCart) {
    return (
      <button
        onClick={(e) => {
          handleCartItems();
          e.target.classList.add(styles.add_cart_exist);
          e.target.disabled = true;
        }}
        className={`add_cart ${styles.pro_add_cart} ${styles.add_cart_exist}`}
        disabled
      >
        Add To Cart
      </button>
    );
  } else {
    return (
      <button
        onClick={(e) => {
          handleCartItems();
          e.target.classList.add(styles.add_cart_exist);
          e.target.disabled = true;
        }}
        className={`add_cart ${styles.pro_add_cart} `}
      >
        Add To Cart
      </button>
    );
  }
};

export default Add_button;
