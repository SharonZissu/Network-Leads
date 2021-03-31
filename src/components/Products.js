import React from "react";
import styled from "styled-components";
import Product from "./Product";

const FilteredProducts = ({
  filteredProductsByCategory,
  filteredProductsBySearch,
  searchInput,
}) => {
  const products =
    filteredProductsBySearch.length !== 0
      ? filteredProductsBySearch
      : filteredProductsByCategory;

  return (
    <Container>
      {searchInput && filteredProductsBySearch.length === 0 ? (
        <h1>no products</h1>
      ) : (
        products.map(({ id, title, imgURL, description }) => (
          <Product
            key={id}
            id={id}
            title={title}
            imgURL={imgURL}
            description={description}
          />
        ))
      )}
    </Container>
  );
};

export default FilteredProducts;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  max-width: 88rem;
  height: 50rem;
  position: relative;
`;
