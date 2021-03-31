import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { products } from "./utills/index";
import Products from "./components/Products";
import FilteringInputs from "./components/FilteringInputs";
import Cart from "./components/Cart";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from "./context/cart-context";

function App() {
  const [filteredProductsByCategory, setFilteredProductsByCategory] = useState(
    products
  );
  const [filteredProductsBySearch, setFilteredProductsBySearch] = useState(
    products
  );
  const [filteredBy, setFilteredBy] = useState("show all categories");
  const [searchInput, setSearchInput] = useState("");
  const { toggleCart } = useContext(CartContext);

  useEffect(() => {
    filterProductsHandler();
    setSearchInput("");
  }, [filteredBy]);

  const handleChangeCategory = (e) => setFilteredBy(e.target.value);

  const filterProductsHandler = () => {
    if (filteredBy === "show all categories") {
      setFilteredProductsByCategory(products);
      setFilteredProductsBySearch([]);
      return;
    }
    const newFilteredProducts = products.filter(
      (prod) => prod.type === filteredBy
    );
    setFilteredProductsByCategory(newFilteredProducts);
    setFilteredProductsBySearch([]);
  };

  const handleChangeSearchInput = (e) => {
    const input = e.target.value;
    if (input === "") {
      filterProductsHandler();
    } else {
      const newFilteredProducts = filteredProductsByCategory.filter(
        (prod) => prod.description.includes(input) || prod.title.includes(input)
      );
      setFilteredProductsBySearch(newFilteredProducts);
    }
    setSearchInput(input);
  };

  return (
    <>
      <Container>
        <Title>Shopping List</Title>

        <IconContainer onClick={toggleCart}>
          <ShoppingCartIcon fontSize="large" />
        </IconContainer>

        <FilteringInputs
          handleChangeCategory={handleChangeCategory}
          searchInput={searchInput}
          handleChangeSearchInput={handleChangeSearchInput}
        />

        <Products
          filteredProductsByCategory={filteredProductsByCategory}
          filteredProductsBySearch={filteredProductsBySearch}
          searchInput={searchInput}
        />

        <Cart />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;

const Container = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 5rem;
  height: 5rem;
  z-index: 10;
  & > svg {
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
`;
