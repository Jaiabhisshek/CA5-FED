import React, { useState } from 'react';


const SearchBar = ({ books = [], onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const filterBooks = () => {
    // Filter books based on the searchTerm
    return books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className='search-container'>
      <label>Search:</label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Enter book title..."
      />
      {/* <h2>Search Results</h2>
      <ul>
        {filterBooks().map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default SearchBar;