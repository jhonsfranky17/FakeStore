import { useState } from "react";
import CartContext from "../../store/cart-context";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentState) => {
      return [...currentState, product];
    });
  };

  const getTotalItems = () =>
    cart.reduce(
      (accumulator, currentProduct) =>
        currentProduct?.quantity || 1 + accumulator,
      0
    );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
