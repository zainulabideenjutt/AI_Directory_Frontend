import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Newsletter from '../../components/Newsletter';

// Sample data for AI news articles
const newsArticles = [
  {
    id: '1',
    title: 'The Evolution of AI Tools in 2025',
    excerpt: 'Explore how artificial intelligence tools have evolved over the past year and what to expect in the coming months.',
    imageUrl: '/images/ai-evolution.svg',
    date: 'May 15, 2025',
    author: 'Alex Johnson',
    category: 'Trends'
  },
  {
    id: '2',
    title: 'How to Use AI to Enhance Your Productivity',
    excerpt: 'Learn how to leverage AI tools to streamline your workflow and boost your productivity in both personal and professional settings.',
    imageUrl: '/images/ai-productivity.svg',
    date: 'May 12, 2025',
    author: 'Sarah Williams',
    category: 'Guides'
  },
  {
    id: '3',
    title: 'The Ethics of AI: Navigating the Future',
    excerpt: 'A deep dive into the ethical considerations surrounding artificial intelligence and how they shape our technological landscape.',
    imageUrl: '/images/ai-ethics.svg',
    date: 'May 10, 2025',
    author: 'Michael Chen',
    category: 'Ethics'
  },
  {
    id: '4',
    title: 'Top AI Tools for Content Creators in 2025',
    excerpt: 'Discover the most powerful AI tools that are revolutionizing content creation across various mediums.',
    imageUrl: '/images/ai-content.svg',
    date: 'May 8, 2025',
    author: 'Emily Rodriguez',
    category: 'Tools'
  },
  {
    id: '5',
    title: 'AI in Healthcare: Transforming Patient Care',
    excerpt: 'How artificial intelligence is revolutionizing healthcare delivery and improving patient outcomes worldwide.',
    imageUrl: '/images/ai-healthcare.svg',
    date: 'May 5, 2025',
    author: 'Dr. James Wilson',
    category: 'Healthcare'
  },
  {
    id: '6',
    title: 'The Rise of Open-Source AI Models',
    excerpt: 'Exploring the growing trend of open-source AI models and their impact on democratizing artificial intelligence.',
    imageUrl: '/images/ai-opensource.svg',
    date: 'May 3, 2025',
    author: 'David Kim',
    category: 'Development'
  }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                AI News & Insights
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl">
                Stay updated with the latest news, trends, and insights in the world of artificial intelligence.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/2 relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Featured Image</span>
                </div>
              </div>
              <div className="p-8 md:w-1/2">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">Featured</div>
                <Link href="/news/the-future-of-ai" className="block mt-1 text-2xl leading-tight font-bold text-gray-900 hover:text-blue-600">
                  The Future of AI: Predictions for the Next Decade
                </Link>
                <p className="mt-2 text-gray-600">
                  In this comprehensive analysis, we explore expert predictions about how artificial intelligence will evolve over the next ten years and transform various industries.
                </p>
                <div className="mt-4 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Robert Anderson</p>
                    <p className="text-sm text-gray-500">May 20, 2025 · 15 min read</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/news/the-future-of-ai" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Read Full Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Articles Grid */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <div className="flex space-x-4">
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Categories</option>
                <option value="trends">Trends</option>
                <option value="guides">Guides</option>
                <option value="ethics">Ethics</option>
                <option value="tools">Tools</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="relative h-48 bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">{article.title} Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.date}</span>
                  </div>
                  <Link href={`/news/${article.id}`} className="block mt-2 text-xl font-semibold text-gray-900 hover:text-blue-600">
                    {article.title}
                  </Link>
                  <p className="mt-3 text-gray-600 text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{article.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700"
              >
                1
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                3
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Next
              </a>
            </nav>
          </div>
        </div>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}