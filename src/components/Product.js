import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../context/cart-context";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

const Product = ({ id, title, imgURL, description }) => {
  const { addToCartHandler, removeFromCartHandler } = useContext(CartContext);
  return (
    <Container>
      <Img src={require(`../images/${imgURL}`).default} alt="product image" />
      <Details>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <AddOrRemoveContainer>
          <IconContainer onClick={() => addToCartHandler(id, title)}>
            <AddCircleOutlineIcon fontSize="large" />
          </IconContainer>
          <IconContainer onClick={() => removeFromCartHandler(id)}>
            <RemoveCircleOutlineIcon fontSize="large" />
          </IconContainer>
        </AddOrRemoveContainer>
      </Details>
    </Container>
  );
};

export default Product;

const Details = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.8);
  transition: all 0.4s;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Container = styled.div`
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  flex: 0 0 20rem;
  margin-bottom: 2rem;
  height: 15rem;
  height: 15rem;
  position: relative;
  :not(:nth-child(4n + 4)) {
    margin-right: 2rem;
  }
  :hover ${Details} {
    opacity: 1;
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const Description = styled.p`
  font-size: 1.4rem;
`;
const AddOrRemoveContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  & :first-child {
    margin-right: 0.4rem;
  }
`;

const IconContainer = styled.div`
  cursor: pointer;
`;
