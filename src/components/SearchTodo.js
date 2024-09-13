import React from 'react';

const SearchTodo = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-todo">
      <input
        type="text"
        placeholder="Search todos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchTodo;
