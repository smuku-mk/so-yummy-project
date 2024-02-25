import { Form, Button, Input } from "./Search.styled";
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
      <Button onClick={handleSearch}>Search</Button>
      <Input
        placeholder="Enter the text"
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </Form>
  );
};

export default Search;
