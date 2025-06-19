'use client';

import React from 'react';
import CategoryCard from './CategoryCard';
import {
  ChatBubbleLeftRightIcon,
  PhotoIcon,
  DocumentTextIcon,
  MusicalNoteIcon,
  CodeBracketIcon,
  PresentationChartBarIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { useLimitedCategories } from '@/hooks/useApi';
import { Category } from '@/api/services';

// Map of icons to use based on category name (case insensitive partial match)
const iconMap: Record<string, React.ReactNode> = {
  chat: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
  image: <PhotoIcon className="h-6 w-6" />,
  content: <DocumentTextIcon className="h-6 w-6" />,
  audio: <MusicalNoteIcon className="h-6 w-6" />,
  music: <MusicalNoteIcon className="h-6 w-6" />,
  develop: <CodeBracketIcon className="h-6 w-6" />,
  code: <CodeBracketIcon className="h-6 w-6" />,
  business: <PresentationChartBarIcon className="h-6 w-6" />,
  educat: <AcademicCapIcon className="h-6 w-6" />,
  study: <AcademicCapIcon className="h-6 w-6" />,
  real: <BuildingOfficeIcon className="h-6 w-6" />,
  default: <SparklesIcon className="h-6 w-6" />
};

// Helper function to get an appropriate icon based on category name
const getCategoryIcon = (categoryName: string): React.ReactNode => {
  const lowerCaseName = categoryName.toLowerCase();

  // Find the first matching key in the iconMap
  const matchingKey = Object.keys(iconMap).find(key =>
    lowerCaseName.includes(key.toLowerCase())
  );

  // Return the matching icon or the default icon
  return matchingKey ? iconMap[matchingKey] : iconMap.default;
};

const Categories = () => {
  const { data: categories, isLoading, error } = useLimitedCategories(8);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">Browse</span> by Category
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Find the perfect AI tool for your specific needs
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="animate-pulse bg-gray-200 rounded-xl h-40"></div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            <p>Failed to load categories. Please try again later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories?.map((category: Category) => (
              <CategoryCard
                key={category.id}
                title={category.name}
                description={category.description || `Explore ${category.name} AI tools`}
                icon={getCategoryIcon(category.name)}
                href={`/ai-tools?category=${category.id}`}
              />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="/ai-tools"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            View All Categories
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;