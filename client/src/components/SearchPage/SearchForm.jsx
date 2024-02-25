import { Form, ButtonWrapper, Button, Input } from "./SearchPage.styled";
import { useState } from "react";

export const SearchForm = ({ fetchRecipes }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("title");

  const handleSearch = () => {
    if (searchValue && searchType) {
      fetchRecipes();
    } else {
      alert("Wprowadz wartosc do pola wyszukiwania");
    }
  };
  return (
    <Form>
      <Input
        placeholder="Enter the text"
        type="text"
        defaultValue={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <ButtonWrapper>
        <Button onClick={handleSearch}>Search</Button>
      </ButtonWrapper>
    </Form>
  );
};
