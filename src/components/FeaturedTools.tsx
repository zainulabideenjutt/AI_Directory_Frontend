'use client';

import React from 'react';
import ToolCard from './ToolCard';
import Link from 'next/link';
import { useFeaturedTools } from '@/hooks/useApi';

const FeaturedTools = () => {
  const { data: featuredTools, isLoading, error } = useFeaturedTools(4);

  return (
    <section id="featured-tools" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-3">Top Picks</span>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            Featured AI Tools
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Discover the most popular and innovative AI tools in our directory
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="animate-pulse bg-gray-200 rounded-xl h-64"></div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            <p>Failed to load featured tools. Please try again later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredTools?.map((tool) => (
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

        <div className="mt-12 text-center">
          <Link
            href="/ai-tools"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            View All AI Tools
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;