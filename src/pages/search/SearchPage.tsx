import React from 'react';

const SearchPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Laptops</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <input
            type="search"
            placeholder="Search laptops..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="text-center text-gray-600">
          Enter your search terms above to find laptops
        </div>
      </div>
    </div>
  );
};

export default SearchPage;