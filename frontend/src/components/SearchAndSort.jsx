import React, { useState } from 'react';

const SearchAndSort = ({ leads, setFilteredLeads }) => {
  const [searchField, setSearchField] = useState('email');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [noResults, setNoResults] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = () => {
    setError(''); // Clear any previous errors

    if (searchTerm.trim() === '') {
      setError('Search term cannot be empty.');
      return;
    }

    let filtered = leads.filter(lead =>
      lead[searchField]?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filtered.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }

    // Sort the filtered results
    filtered = filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[searchField].localeCompare(b[searchField]);
      } else {
        return b[searchField].localeCompare(a[searchField]);
      }
    });

    setFilteredLeads(filtered);
    setSearchTerm(''); // Clear the search input field
  };

  return (
    <div className="mb-4 mt-4 max-w-md mx-auto p-4 bg-gray-800 rounded-lg shadow-lg">
      <div className="flex flex-col sm:flex-row gap-4">
        <select
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
          className="input bg-gray-900 border-gray-600 text-white flex-1"
        >
          <option value="email">Email</option>
          <option value="name">Name</option>
          <option value="number">Number</option>
        </select>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="input bg-gray-900 border-gray-600 text-white flex-1"
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="input bg-gray-900 border-gray-600 text-white flex-1"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <button
          onClick={handleSearch}
          className="btn bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-md shadow-md transition-transform transform hover:scale-105 hover:from-indigo-600 hover:to-purple-600 flex-shrink-0"
        >
          Search
        </button>
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-800 text-red-300 border border-red-700 rounded-md">
          {error}
        </div>
      )}

      {noResults && !error && (
        <div className="mt-4 p-4 bg-yellow-800 text-yellow-300 border border-yellow-700 rounded-md">
          No results found.
        </div>
      )}
    </div>
  );
};

export default SearchAndSort;
