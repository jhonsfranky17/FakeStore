import { createContext } from "react";

const cartContext = createContext({
  cart: null,
  addToCart: () => {},
  getTotalItems: () => {},
});

export default cartContext;
