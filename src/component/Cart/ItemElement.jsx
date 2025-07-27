import { useEffect } from "react";
import styles from "./Cart.module.css";
import pro_styles from "../Products/card style.module.css";
import { useCartShoppingContext } from "../CartShopping";

const ItemElement = ({ item }) => {
  const { cartItems, setCartItems } = useCartShoppingContext();

  // create function to increment the number of items in cart item when user click on plus button
  const increment = () => {
    setCartItems((prev) =>
      prev.map((product) =>
        product.id == item.id
          ? { ...product, countity: product.countity + 1 }
          : product
      )
    );
  };
  // create function to decrement the number of items in cart item when user click on minus button
  const decrement = () => {
    setCartItems((prev) =>
      prev.map((product) =>
        product.id == item.id && product.countity > 1
          ? { ...product, countity: product.countity - 1 }
          : product
      )
    );
  };
  // Update the cartItems in local storage when cartItmes change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  // Delete the Items in cartItems and cart Element and remove the add_cart_exist class from button card element when user click on delete button
  const delete_items = (id) => {
    // Remove add_cart_exist class from that product which user want delete it
    const all_products_element = document.querySelectorAll(".product");
    all_products_element.forEach((pro) => {
      if (+pro.dataset.id === id) {
        // Remove add_cart_exist Class and make button is disabled
        pro
          .querySelector(".add_cart")
          .classList.remove(pro_styles.add_cart_exist);
        pro.querySelector(".add_cart").disabled = false;
      }
    });

    // Delete Item From Items list
    setCartItems((prev) => {
      return (prev = prev.filter((item) => item.id != id));
    });
  };

  return (
    <div className={styles.item}>
      <div className={styles.img_box}>
        <img src={item.img} width="50px" height="50px" alt="" />
      </div>
      <div className={styles.item_info}>
        <h3>{item.name}</h3>
        <p>price: {item.price * item.countity}</p>
        <div className="control_items">
          <button onClick={() => decrement()}>
            <i className="fa-solid fa-minus"></i>
          </button>
          <span>{item.countity}</span>
          <button onClick={() => increment()}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <button onClick={() => delete_items(item.id)} className="delete_item">
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default ItemElement;
