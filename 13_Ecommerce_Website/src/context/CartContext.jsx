import { createContext, useContext,useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      const updateCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updateCart);
      toast.warning("Product quantity updated in cart");
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success("Product added to cart");
    }
  };

  const deleteFromCart = (productId) => {
    const updateCart = cart.filter((item) => item.id !== productId);
    setCart(updateCart);
    toast.error("Product removed from cart");
  };

  const updateQuantity = (cart, itemId, action) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === itemId) {
            let newQuantity = item.quantity;
            if (action === "increment") {
              newQuantity += 1;
              toast.success("Product quantity increased");
            } else if (action === "decrement" && item.quantity >= 1) {
              newQuantity -= 1;
              toast.error("Product quantity decreased");
            }
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        })
        .filter((item) => item !== null)
    )
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, deleteFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
