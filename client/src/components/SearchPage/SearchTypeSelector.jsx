import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchTypeSelector = () => {
  const [searchType, setSearchType] = useState("query");
  const navigate = useNavigate();

  const handleTypeChange = (type) => {
    setSearchType(type);
    navigate.push(`/search?type=${type}`);
  };

  return (
    <div>
      <label htmlFor="searchType">Search Type: </label>
      <select id="searchType" value={searchType} onChange={handleTypeChange}>
        <option value="title">Title</option>
        <option value="ingredient">Ingredients</option>
      </select>
    </div>
  );
};
