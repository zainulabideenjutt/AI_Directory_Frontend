'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ToolCard from '../../components/ToolCard';
import Newsletter from '../../components/Newsletter';
import { useTools, useCategories, useTypes } from '@/hooks/useApi';

export default function FreeAiPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State for filters and pagination
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  // Update URL parameters function
  const updateUrlParams = useCallback((newParams: {
    search?: string;
    category?: number | null;
    type?: number | null;
    sort?: string;
    page?: number;
  }) => {
    const params = new URLSearchParams();

    const search = newParams.search !== undefined ? newParams.search : searchQuery;
    const category = newParams.category !== undefined ? newParams.category : selectedCategory;
    const type = newParams.type !== undefined ? newParams.type : selectedType;
    const sort = newParams.sort !== undefined ? newParams.sort : sortBy;
    const page = newParams.page !== undefined ? newParams.page : currentPage;

    if (search) {
      params.set('search', search);
    }

    if (category) {
      params.set('category', category.toString());
    }

    if (type) {
      params.set('type', type.toString());
    }

    if (sort && sort !== 'newest') {
      params.set('sort', sort);
    }

    if (page > 1) {
      params.set('page', page.toString());
    }

    const queryString = params.toString();
    router.push(`/ai-tools${queryString ? `?${queryString}` : ''}`, { scroll: false });
  }, [searchQuery, selectedCategory, selectedType, sortBy, currentPage, router]);

  // Get query parameters from URL
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const newCategory = categoryParam ? parseInt(categoryParam) : null;

    const typeParam = searchParams.get('type');
    const newType = typeParam ? parseInt(typeParam) : null;

    const searchParam = searchParams.get('search');
    const newSearch = searchParam || '';

    const pageParam = searchParams.get('page');
    const newPage = pageParam ? parseInt(pageParam) : 1;

    const sortParam = searchParams.get('sort');
    const newSort = sortParam || 'newest';

    // Only update state if values have actually changed
    if (newCategory !== selectedCategory) setSelectedCategory(newCategory);
    if (newType !== selectedType) setSelectedType(newType);
    if (newSearch !== searchQuery) setSearchQuery(newSearch);
    if (newPage !== currentPage) setCurrentPage(newPage);
    if (newSort !== sortBy) setSortBy(newSort);
  }, [searchParams]);

  // Fetch all data (not paginated) - remove pagination parameters from API call
  const { data: allToolsData, isLoading: isLoadingTools, error: toolsError } = useTools();
  const { data: categories, isLoading: isLoadingCategories } = useCategories();
  const { data: types, isLoading: isLoadingTypes } = useTypes();

  // Client-side filtering, sorting, and pagination
  const processedData = useMemo(() => {
    if (!allToolsData) return { tools: [], totalItems: 0, totalPages: 0 };

    // Get all tools (handle different response structures)
    const allTools = Array.isArray(allToolsData) ? allToolsData :
      allToolsData.results || allToolsData.data || [];

    // Filter tools based on search query
    let filteredTools = allTools.filter(tool => {
      const matchesSearch = !searchQuery ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = !selectedCategory ||
        tool.category.id === selectedCategory;

      const matchesType = !selectedType ||
        tool.type.id === selectedType;

      return matchesSearch && matchesCategory && matchesType;
    });

    // Sort tools
    filteredTools.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return (b.upvote_count || 0) - (a.upvote_count || 0);
        case 'trending':
          return (b.trend_count || 0) - (a.trend_count || 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'az':
          return a.name.localeCompare(b.name);
        case 'za':
          return b.name.localeCompare(a.name);
        case 'newest':
        default:
          return new Date(b.date_added || 0).getTime() - new Date(a.date_added || 0).getTime();
      }
    });

    // Calculate pagination
    const totalItems = filteredTools.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    // Get current page tools
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedTools = filteredTools.slice(startIndex, endIndex);

    return {
      tools: paginatedTools,
      totalItems,
      totalPages,
      allFilteredTools: filteredTools
    };
  }, [allToolsData, searchQuery, selectedCategory, selectedType, sortBy, currentPage, pageSize]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPage = 1;
    setCurrentPage(newPage);
    updateUrlParams({ page: newPage });
  };

  // Handle category filter change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const newCategory = value ? parseInt(value) : null;
    const newPage = 1;

    setSelectedCategory(newCategory);
    setCurrentPage(newPage);
    updateUrlParams({ category: newCategory, page: newPage });
  };

  // Handle type filter change
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const newType = value ? parseInt(value) : null;
    const newPage = 1;

    setSelectedType(newType);
    setCurrentPage(newPage);
    updateUrlParams({ type: newType, page: newPage });
  };

  // Handle sort change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = e.target.value;
    const newPage = 1; // Reset to first page when sorting
    setSortBy(newSort);
    setCurrentPage(newPage);
    updateUrlParams({ sort: newSort, page: newPage });
  };

  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateUrlParams({ page });
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate pagination items
  const getPaginationItems = () => {
    const items = [];
    const { totalPages } = processedData;
    const maxPagesToShow = 5;

    if (totalPages <= 1) return items;

    // Always show first page
    items.push(
      <a
        key="page-1"
        href="#"
        onClick={(e) => { e.preventDefault(); handlePageChange(1); }}
        className={`inline-flex items-center px-4 py-2 border border-primary ${currentPage === 1 ? 'bg-primary text-white' : 'bg-white text-black hover:bg-primary hover:text-white'} text-sm font-medium`}
      >
        1
      </a>
    );

    if (totalPages === 1) return items;

    // Calculate range of pages to show
    let startPage = Math.max(2, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages - 1, startPage + maxPagesToShow - 3);

    // Adjust startPage if we're near the end
    if (endPage === totalPages - 1) {
      startPage = Math.max(2, endPage - maxPagesToShow + 3);
    }

    // Add ellipsis if there's a gap after page 1
    if (startPage > 2) {
      items.push(
        <span key="ellipsis-1" className="inline-flex items-center px-4 py-2 border border-primary bg-white text-sm font-medium text-black">
          ...
        </span>
      );
    }

    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      if (i > 1 && i < totalPages) {
        items.push(
          <a
            key={`page-${i}`}
            href="#"
            onClick={(e) => { e.preventDefault(); handlePageChange(i); }}
            className={`inline-flex items-center px-4 py-2 border border-primary ${currentPage === i ? 'bg-primary text-white' : 'bg-white text-black hover:bg-primary hover:text-white'} text-sm font-medium`}
          >
            {i}
          </a>
        );
      }
    }

    // Add ellipsis if there's a gap before the last page
    if (endPage < totalPages - 1) {
      items.push(
        <span key="ellipsis-2" className="inline-flex items-center px-4 py-2 border border-primary bg-white text-sm font-medium text-black">
          ...
        </span>
      );
    }

    // Always show last page
    if (totalPages > 1) {
      items.push(
        <a
          key={`page-${totalPages}`}
          href="#"
          onClick={(e) => { e.preventDefault(); handlePageChange(totalPages); }}
          className={`inline-flex items-center px-4 py-2 border border-primary ${currentPage === totalPages ? 'bg-primary text-white' : 'bg-white text-black hover:bg-primary hover:text-white'} text-sm font-medium`}
        >
          {totalPages}
        </a>
      );
    }

    return items;
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setSelectedType(null);
    setSortBy('newest');
    setCurrentPage(1);
    router.push('/ai-tools', { scroll: false });
  };

  // Reset to page 1 when filters change and current page is beyond available pages
  useEffect(() => {
    if (processedData.totalPages > 0 && currentPage > processedData.totalPages) {
      setCurrentPage(1);
      updateUrlParams({ page: 1 });
    }
  }, [processedData.totalPages, currentPage, updateUrlParams]);

  const { tools, totalItems, totalPages } = processedData;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-primary text-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                AI Tools Directory
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl">
                Explore our comprehensive list of AI tools to enhance your productivity and creativity.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4 rounded-lg shadow-sm text-black border border-primary">
            <form onSubmit={handleSearchSubmit}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search AI tools..."
                    className="w-full px-4 py-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-500"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <select
                    className="px-4 py-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={selectedCategory?.toString() || ''}
                    onChange={handleCategoryChange}
                  >
                    <option value="">All Categories</option>
                    {categories?.map(category => (
                      <option key={category.id} value={category.id.toString()}>
                        {category.name}
                      </option>
                    ))}
                  </select>

                  <select
                    className="px-4 py-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={selectedType?.toString() || ''}
                    onChange={handleTypeChange}
                  >
                    <option value="">All Types</option>
                    {types?.map(type => (
                      <option key={type.id} value={type.id.toString()}>
                        {type.name}
                      </option>
                    ))}
                  </select>

                  <select
                    className="px-4 py-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={sortBy}
                    onChange={handleSortChange}
                  >
                    <option value="newest">Sort By: Newest</option>
                    <option value="popular">Most Popular</option>
                    <option value="trending">Trending</option>
                    <option value="rating">Highest Rated</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                  </select>
                </div>
              </div>
            </form>
          </div>

          {/* Results count */}
          {!isLoadingTools && (
            <div className="mt-4 text-sm text-gray-600">
              Showing {tools.length} of {totalItems} results
              {currentPage > 1 && ` (Page ${currentPage} of ${totalPages})`}
            </div>
          )}
        </div>

        {/* Tools Grid */}
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {isLoadingTools ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[...Array(pageSize)].map((_, index) => (
                <div key={index} className="animate-pulse bg-gray-200 rounded-xl h-64"></div>
              ))}
            </div>
          ) : toolsError ? (
            <div className="text-center text-red-500 py-12">
              <p className="text-xl">Failed to load AI tools. Please try again later.</p>
            </div>
          ) : tools.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No AI tools found matching your criteria.</p>
              <button
                onClick={clearAllFilters}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {tools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  id={String(tool.id)}
                  title={tool.name}
                  description={tool.description}
                  category={tool.category.name}
                  imageUrl={tool.image_url || ''}
                  link={tool.url || '#'}
                  isFree={tool.type.name === 'Free AI'}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          {!isLoadingTools && !toolsError && tools.length > 0 && totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) handlePageChange(currentPage - 1);
                  }}
                  className={`inline-flex items-center px-4 py-2 rounded-l-md border border-primary ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-black hover:bg-primary hover:text-white'} text-sm font-medium`}
                >
                  Previous
                </a>

                {getPaginationItems()}

                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) handlePageChange(currentPage + 1);
                  }}
                  className={`inline-flex items-center px-4 py-2 rounded-r-md border border-primary ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-black hover:bg-primary hover:text-white'} text-sm font-medium`}
                >
                  Next
                </a>
              </nav>
            </div>
          )}
        </div>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}