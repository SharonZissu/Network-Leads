import React from "react";
import styled from "styled-components";

const FilteringInputs = ({
  handleChangeCategory,
  searchInput,
  handleChangeSearchInput,
}) => {
  return (
    <Container>
      <Select
        name="categories"
        id="categories"
        selected="show all categories"
        onChange={handleChangeCategory}
      >
        <option value="show all categories">Show all categories</option>
        <option value="shoes">Shoes</option>
        <option value="shirts">Shirts</option>
        <option value="pants">Pants</option>
      </Select>
      <Input
        value={searchInput}
        onChange={handleChangeSearchInput}
        placeholder="Search..."
      />
    </Container>
  );
};

export default FilteringInputs;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 2rem 0;
`;

const Select = styled.select`
  padding: 0.4rem 1rem;
  font-size: 1.6rem;
  font-family: inherit;
  margin-bottom: 1rem;
  background-color: #ccc;
  border: 1px solid black;
  :focus {
    outline: none;
  }
`;
const Input = styled.input`
  padding: 0.4rem 1rem;
  font-size: 1.6rem;
  font-family: inherit;
  background-color: #ccc;
  border: 1px solid black;
  :focus {
    outline: none;
  }
`;
