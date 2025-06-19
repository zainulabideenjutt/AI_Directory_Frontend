'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ToolCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  link: string;
  isFree: boolean;
}

const ToolCard: React.FC<ToolCardProps> = ({
  id,
  title,
  description,
  category,
  imageUrl,
  link,
  isFree
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 w-full bg-gray-100">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary to-primary-dark text-white">
            <span className="text-3xl font-bold">{title.charAt(0)}</span>
          </div>
        )}
        {isFree && (
          <span className="absolute top-3 right-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-white shadow-sm">
            Free
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2">
          <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-200">
            <Link href={`/tool/${id}`} className="hover:underline decoration-primary decoration-2 underline-offset-2">{title}</Link>
          </h3>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{description}</p>

        <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
          <span className="text-xs font-medium text-white bg-primary px-2.5 py-1.5 rounded-full shadow-sm">
            {category}
          </span>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark text-sm font-medium inline-flex items-center group"
          >
            Visit Tool
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;