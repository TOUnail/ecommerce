import { createContext, useState, useEffect } from "react";
export const Context = createContext();
const Cart = ({ children }) => {
  const getInitialCart = () => JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const initialCart = getInitialCart();
    if (initialCart) {
      setCart(initialCart);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const addToCart = (id, qty = 1) => {
    const item = cart.find((i) => i.id === id);
    if (item) {
      item.qty += qty;
      setCart([...cart]);
    } else {
      setCart([...cart, { id, qty }]);
    }
  };
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  const exposed = {
    cart,
    addToCart,
    removeFromCart,
  };
  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};
export default Cart;
