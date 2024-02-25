import { Form, ButtonWrapper, Button, Input } from "./SearchPage.styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchValue) {
      navigate(`/search?query=${searchValue}`);
    } else {
      alert("Wprowadz wartosc do pola wyszukiwania");
    }
  };
  return (
    <Form>
      <Input
        placeholder="Enter the text"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <ButtonWrapper>
        <Button onClick={handleSearch}>Search</Button>
      </ButtonWrapper>
    </Form>
  );
};

export default Search;
