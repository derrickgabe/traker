import React from "react";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="searchbar"
        placeholder="YOU CAN SEARCH YOUR SUBMITTIONS HERE"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
