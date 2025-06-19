'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // output-onlinepngtools
  return (
    <header className="bg-white border-b border-nav-border shadow-sm sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          {/* Logo + Site Title */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center ">
              <Image
                src="/images/output-onlinepngtools.png" // Replace with actual path like '/images/ai-logo.png'
                alt="AI Directory Logo"
                width={100}
                height={100}
                className="object-fit relative right-[15%] top-2.5"
                priority
              />
              <span className="text-2xl font-bold text-secondary leading-none relative right-[25%]">AI Directory</span>
            </Link>
          </div>


          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Link href="/" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50 transition duration-150 ease-in-out">
              Home
            </Link>
            <Link href="/ai-tools" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50 transition duration-150 ease-in-out">
              AI Tools
            </Link>
            <Link href="/top-10" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50 transition duration-150 ease-in-out">
              Top 10
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50 transition duration-150 ease-in-out">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50 transition duration-150 ease-in-out">
              Contact
            </Link>
            <Link href="/faq" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50 transition duration-150 ease-in-out">
              FAQ
            </Link>
          </nav>

          {/* Search */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-150 ease-in-out"
                placeholder="Search AI tools..."
              />
            </div>
            <button
              type="submit"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 ease-in-out"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50">
              Home
            </Link>
            <Link href="/ai-tools" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50">
              AI Tools
            </Link>
            <Link href="/top-10" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50">
              Top 10
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50">
              Contact
            </Link>
            <Link href="/faq" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50">
              FAQ
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 space-y-1">
              <div className="relative mx-2">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
                  placeholder="Search AI tools..."
                />
                <button
                  type="submit"
                  className="mt-2 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
