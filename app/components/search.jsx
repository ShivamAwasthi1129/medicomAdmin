
"use client"
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center space-x-2  rounded-lg shadow-md">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="w-full px-2 py-1   rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-1 bg-pink-500 text-white rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
