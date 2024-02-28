import { Form, Button, Input } from "./Search.styled";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../../../redux/search/operations.js";
import { selectSearchType } from '../../../redux/search/selectors.js';
import { useNavigate } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const searchType = useSelector(selectSearchType);

  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchValue && searchType) {
      dispatch( fetchRecipes( { searchValue, searchType }));
      navigate(`/search`);
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
        value={searchValue}
      />
    </Form>
  );
};

export default Search;
