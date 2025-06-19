'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeftIcon,
  StarIcon,
  // CheckCircleIcon,
  ArrowTrendingUpIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import {
  StarIcon as StarIconSolid,
  CheckCircleIcon as CheckCircleIconSolid
} from '@heroicons/react/24/solid';
import { Hashtag } from '@/api/services';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Newsletter from '../../../components/Newsletter';
import { useTool } from '@/hooks/useApi';

// Sample Tool Data
// const sampleToolData = {
//   id: 1,
//   name: 'Leonardo AI',
//   image_url: 'http://127.0.0.1:8000/media/tools/images/d234c6aa-eb88-4ea9-83ce-8d6c22151fac.webp',
//   logo_url: 'http://127.0.0.1:8000/media/tools/logos/092b78b7-568f-4f6d-ab38-f4e6b3af3797.png',
//   description: 'A complete design platform that generates professional images, 3D textures and designs...',
//   upvote_count: 414,
//   trend_count: 94215,
//   rating: '4.50',
//   is_verified: true,
//   url: 'https://leonardo.ai/',
//   rank_in_category: 1,
//   category: {
//     id: 27,
//     name: '3D model',
//     description: 'The best AI that offer online 3D modeling.'
//   },
//   type: {
//     id: 2,
//     name: 'Freemium'
//   },
//   hashtags: [
//     { id: 5, name: 'AIxploria Selection', description: '...' },
//     { id: 52, name: 'Image Generators', description: '...' },
//     { id: 64, name: '3D model', description: '...' }
//   ],
//   date_added: '2025-06-10T04:08:30.143786Z',
//   date_updated: '2025-06-10T04:08:30.143786Z'
// };

export default function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const { data: tool } = useTool(parseInt(slug));

  // const tool = sampleToolData;

  if (!tool) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-foreground">Tool not found</h1>
          <p className="mt-4 text-foreground opacity-80">
            The tool you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link href="/" className="mt-8 inline-flex items-center text-primary hover:text-accent">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const rating = parseFloat(tool.rating);
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <div className="relative">
          {tool.image_url && (
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={tool.image_url}
                alt={`${tool.name} preview`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
            </div>
          )}

          <div className="relative z-10 min-h-[600px] flex items-center">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 w-full">
              <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-white hover:text-gray-200 transition-colors duration-200 group">
                  <ArrowLeftIcon className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Tools
                </Link>
              </div>

              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-1 text-white">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 relative flex-shrink-0 bg-white rounded-xl p-2 shadow-lg">
                      <Image
                        src={tool.logo_url || tool.image_url}
                        alt={tool.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                          {tool.name}
                        </h1>
                        {tool.is_verified && (
                          <CheckCircleIconSolid className="h-6 w-6 md:h-8 md:w-8 text-blue-400" title="Verified Tool" />
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            i < fullStars ? (
                              <StarIconSolid key={i} className="h-5 w-5 text-yellow-400" />
                            ) : i === fullStars && hasHalfStar ? (
                              <div key={i} className="relative">
                                <StarIcon className="h-5 w-5 text-yellow-400" />
                                <StarIconSolid className="h-5 text-yellow-400 absolute top-0 left-0 w-1/2 overflow-hidden" />
                              </div>
                            ) : (
                              <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                            )
                          ))}
                          <span className="ml-2 text-white font-medium">{tool.rating}</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <HeartIcon className="h-5 w-5 text-red-400" />
                          <span className="text-white font-medium">{tool.upvote_count.toLocaleString()}</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <ArrowTrendingUpIcon className="h-5 w-5 text-green-400" />
                          <span className="text-white font-medium">{tool.trend_count.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary-foreground text-primary">
                          {tool.category.name}
                        </span>

                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${tool.type.name === 'Free'
                            ? 'bg-green-100 text-green-800'
                            : tool.type.name === 'Freemium'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-yellow-100 text-yellow-800'
                            }`}
                        >
                          {tool.type.name}
                        </span>

                        {tool.rank_in_category === 1 && (
                          <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800 border border-amber-300">
                            #1 in Category
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-xl leading-relaxed mb-8 max-w-3xl">{tool.description}</p>

                  {/* Hashtags */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-3">Hashtags</h3>
                    <div className="flex flex-wrap gap-2">
                      {tool.hashtags.map((hashtag: Hashtag) => (
                        <span
                          key={hashtag.id}
                          className="px-3 uppercase py-1 rounded-full text-sm font-medium bg-white/10 text-white/80 hover:bg-white/20 transition-colors cursor-pointer"
                        >
                          #{hashtag.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-primary bg-white hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Visit {tool.name}
                    </a>
                  </div>
                </div>

                {/* Right Stats Panel */}
                <div className="w-full lg:w-80 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex-shrink-0">
                  <h3 className="text-lg font-semibold text-white mb-4">Tool Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center bg-white/10 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-white">{tool.rating}</div>
                      <div className="text-sm text-white/80">Rating</div>
                    </div>
                    <div className="text-center bg-white/10 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-white">#{tool.rank_in_category}</div>
                      <div className="text-sm text-white/80">Rank</div>
                    </div>
                    <div className="text-center bg-white/10 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-white">{tool.upvote_count.toLocaleString()}</div>
                      <div className="text-sm text-white/80">Upvotes</div>
                    </div>
                    <div className="text-center bg-white/10 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-white">{tool.trend_count.toLocaleString()}</div>
                      <div className="text-sm text-white/80">Trends</div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/20 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Type</span>
                      <span className="text-white font-medium">{tool.type.name}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Category</span>
                      <span className="text-white font-medium">{tool.category.name}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Verified</span>
                      <span className={`font-medium ${tool.is_verified ? 'text-green-400' : 'text-white/60'}`}>
                        {tool.is_verified ? 'Yes' : 'No'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
