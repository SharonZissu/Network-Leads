import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/cart-context";

const Cart = () => {
  const { cart, cartIsOpen, resetCart } = useContext(CartContext);

  const buyHandler = () => {
    console.log("Your Products:", cart);
  };

  return (
    <Container cartIsOpen={cartIsOpen}>
      {cart.length === 0 ? (
        <h1>No Products In Cart</h1>
      ) : (
        <>
          {cart.map((product) => (
            <h1 key={product.id}>
              x{product.amount} {product.title}
            </h1>
          ))}
          <Btn onClick={buyHandler}>Buy</Btn>
          <Btn onClick={resetCart}>Reset Cart</Btn>
        </>
      )}
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  width: 25rem;
  height: 100vh;
  background-color: #ccc;
  border-left: 2px dashed black;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.2);
  opacity: ${({ cartIsOpen }) => (cartIsOpen ? 1 : 0)};
  transition: all 0.4s;
  transform: ${({ cartIsOpen }) =>
    cartIsOpen ? "translateX(0)" : "translateX(100%)"};
  padding-top: 15rem;
`;

const Btn = styled.button`
  margin-top: 2rem;
  padding: 1rem 4rem;
  font-size: 2rem;
  cursor: pointer;
`;
