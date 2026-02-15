import { useState, useMemo } from 'react';

/**
 * @param {Array} data - The raw list of items (products, projects, articles)
 * @param {Object} initialFilters - Initial state { category: 'All', year: 'All' }
 * @param {Array} searchKeys - Keys to search in ['title', 'category', 'description']
 */
const useDataFilter = (data, initialFilters, searchKeys = ['name', 'title']) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState(initialFilters);

  // Helper to update a single filter
  const setFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // Helper to clear all
  const resetFilters = () => {
    setSearchQuery('');
    setFilters(initialFilters);
  };

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      // 1. Run Search
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = searchKeys.some((key) => {
          const val = item[key];
          return val && val.toString().toLowerCase().includes(query);
        });
        if (!matchesSearch) return false;
      }

      // 2. Run Filters
      // Checks every key in the 'filters' object.
      // If filter value is "All", it passes. Otherwise, exact match required.
      return Object.entries(filters).every(([key, filterValue]) => {
        if (filterValue === 'All') return true;
        // Handle array filters (e.g., tags) vs string matches
        if (Array.isArray(item[key])) {
          return item[key].includes(filterValue);
        }
        return item[key] === filterValue;
      });
    });
  }, [data, searchQuery, filters, searchKeys]);

  return {
    searchQuery,
    setSearchQuery,
    filters,
    setFilter,
    resetFilters,
    filteredData,
    resultsCount: filteredData.length,
  };
};

export default useDataFilter;