import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:py-28 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-left lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Discover the Best</span>
              <span className="block mt-2">AI Tools for Your Needs</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-white/90">
              Explore our curated collection of cutting-edge AI tools designed to enhance your productivity, creativity, and problem-solving capabilities.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a 
                href="#featured-tools" 
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-accent hover:bg-accent-dark transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
              >
                Explore Tools
              </a>
              <a 
                href="/about" 
                className="px-8 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white hover:bg-white/10 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
              <h2 className="text-xl font-bold mb-4">Find the Perfect AI Tool</h2>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-white/70" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-4 border border-white/30 rounded-md leading-5 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent sm:text-base"
                  placeholder="Search for AI tools..."
                />
                <button
                  type="submit"
                  className="mt-3 w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-primary-dark bg-white hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;