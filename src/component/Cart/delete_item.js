import { useCartShoppingContext } from "../CartShopping";

const { cartItems, setCartItems } = useCartShoppingContext();
export const useDelete_item = (id) => {
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
