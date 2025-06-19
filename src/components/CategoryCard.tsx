'use client';

import React from 'react';
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, icon, href }) => {
  return (
    <Link
      href={href}
      className="group block p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
    >
      {/* Background gradient that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 via-primary/5 to-primary-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-primary group-hover:text-primary-dark transition-colors duration-300 p-2 bg-primary/5 rounded-lg">
            <div className="w-10 h-10 flex items-center justify-center">
              {icon}
            </div>
          </div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>
        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 ml-16">
          {description}
        </p>
        
        {/* Subtle arrow indicator */}
        <div className="mt-4 flex justify-end">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-gray-400 group-hover:text-primary transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
