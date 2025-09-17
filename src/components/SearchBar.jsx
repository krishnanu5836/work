import React, { useContext } from "react";
import { DashboardContext } from "../Context/DashboardContext";

const SearchBar = () => {
  const { search, setSearch } = useContext(DashboardContext);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search widgets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
