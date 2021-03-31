import React, { createContext, useState } from "react";

const CartContext = createContext();
const { Provider } = CartContext;

const CartProvider = ({ children, gameStart }) => {
  const [cart, setCart] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const addToCartHandler = (id, title) => {
    const copyCart = [...cart];
    const findProduct = copyCart.find((prod) => prod.id === id);
    if (findProduct) {
      findProduct.amount++;
      setCart(copyCart);
    } else {
      const newProduct = { id, title, amount: 1 };
      setCart([...cart, newProduct]);
    }
    openCart();
  };

  const removeFromCartHandler = (id) => {
    let copyCart = [...cart];
    const findProduct = copyCart.find((prod) => prod.id === id);
    if (!findProduct) return;
    if (findProduct.amount === 1) {
      copyCart = copyCart.filter((prod) => prod.id !== id);
    } else {
      findProduct.amount--;
    }
    setCart(copyCart);
  };

  const openCart = () => {
    setCartIsOpen(true);
  };

  const toggleCart = () => {
    setCartIsOpen((prevState) => !prevState);
  };

  const resetCart = () => {
    setCart([]);
  };

  return (
    <Provider
      value={{
        cart,
        addToCartHandler,
        removeFromCartHandler,
        cartIsOpen,
        openCart,
        resetCart,
        toggleCart,
      }}
    >
      {children}
    </Provider>
  );
};

export { CartContext, CartProvider };
