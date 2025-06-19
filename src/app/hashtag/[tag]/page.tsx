'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Newsletter from '../../../components/Newsletter';
import ToolCard from '../../../components/ToolCard';

// Sample hashtags data 
const hashtagsData = {
  'ai-chatbot': {
    id: '1',
    title: 'AI Chatbot',
    description: 'Tools that provide conversational AI interfaces for various purposes.',
    relatedTags: ['virtual-assistant', 'customer-service', 'nlp']
  },
  'image-generation': {
    id: '2',
    title: 'Image Generation',
    description: 'AI tools that create images from text descriptions or other inputs.',
    relatedTags: ['text-to-image', 'ai-art', 'design']
  },
  'content-writing': {
    id: '3',
    title: 'Content Writing',
    description: 'AI tools that help create written content for various purposes.',
    relatedTags: ['copywriting', 'blog-writing', 'marketing']
  },
  'code-assistant': {
    id: '4',
    title: 'Code Assistant',
    description: 'AI tools that help with programming and software development.',
    relatedTags: ['programming', 'development', 'coding']
  },
  'virtual-assistant': {
    id: '5',
    title: 'Virtual Assistant',
    description: 'AI assistants that help with tasks, scheduling, and information.',
    relatedTags: ['ai-chatbot', 'productivity', 'automation']
  },
  'text-to-image': {
    id: '6',
    title: 'Text to Image',
    description: 'Tools that convert text descriptions into visual imagery.',
    relatedTags: ['image-generation', 'ai-art', 'design']
  },
  'ai-art': {
    id: '7',
    title: 'AI Art',
    description: 'Tools for creating artistic content using artificial intelligence.',
    relatedTags: ['image-generation', 'text-to-image', 'creativity']
  },
  'copywriting': {
    id: '8',
    title: 'Copywriting',
    description: 'AI tools specialized in creating marketing and advertising copy.',
    relatedTags: ['content-writing', 'marketing', 'advertising']
  },
  'programming': {
    id: '9',
    title: 'Programming',
    description: 'AI tools that assist with coding and software development.',
    relatedTags: ['code-assistant', 'development', 'coding']
  },
  'marketing': {
    id: '10',
    title: 'Marketing',
    description: 'AI tools for marketing automation, analysis, and content creation.',
    relatedTags: ['copywriting', 'content-writing', 'advertising']
  }
};

// Sample tools data
const toolsData = [
  {
    id: '1',
    title: 'ChatGPT',
    description: 'An AI language model that can engage in conversation, answer questions, assist with tasks, and generate various types of content.',
    category: 'Chatbots',
    imageUrl: '/images/chatgpt.svg',
    link: 'https://chat.openai.com',
    isFree: true,
    tags: ['ai-chatbot', 'virtual-assistant', 'content-writing']
  },
  {
    id: '2',
    title: 'Claude',
    description: 'An AI assistant by Anthropic designed to be helpful, harmless, and honest in its interactions.',
    category: 'Chatbots',
    imageUrl: '/images/claude.svg',
    link: 'https://claude.ai',
    isFree: true,
    tags: ['ai-chatbot', 'virtual-assistant']
  },
  {
    id: '3',
    title: 'Bard',
    description: 'Google\'s conversational AI service powered by the PaLM large language model.',
    category: 'Chatbots',
    imageUrl: '/images/bard.svg',
    link: 'https://bard.google.com',
    isFree: true,
    tags: ['ai-chatbot', 'virtual-assistant']
  },
  {
    id: '4',
    title: 'DALL-E',
    description: 'An AI system by OpenAI that can create realistic images and art from natural language descriptions.',
    category: 'Image Generation',
    imageUrl: '/images/dalle.svg',
    link: 'https://openai.com/dall-e-2',
    isFree: false,
    tags: ['image-generation', 'text-to-image', 'ai-art']
  },
  {
    id: '5',
    title: 'Hugging Face',
    description: 'A platform that provides access to thousands of pre-trained models for natural language processing, computer vision, and more.',
    category: 'Development',
    imageUrl: '/images/huggingface.svg',
    link: 'https://huggingface.co',
    isFree: true,
    tags: ['programming', 'code-assistant', 'development']
  },
  {
    id: '6',
    title: 'Midjourney',
    description: 'An AI program that generates images from textual descriptions, similar to OpenAI\'s DALL-E and Stable Diffusion.',
    category: 'Image Generation',
    imageUrl: '/images/midjourney.svg',
    link: 'https://www.midjourney.com',
    isFree: false,
    tags: ['image-generation', 'text-to-image', 'ai-art']
  },
  {
    id: '7',
    title: 'Jasper',
    description: 'An AI content platform that helps create marketing copy, social media posts, and long-form content.',
    category: 'Content Creation',
    imageUrl: '/images/jasper.svg',
    link: 'https://www.jasper.ai',
    isFree: false,
    tags: ['content-writing', 'copywriting', 'marketing']
  },
  {
    id: '8',
    title: 'Copy.ai',
    description: 'An AI-powered copywriter that generates high-quality content for blogs, ads, emails, and more.',
    category: 'Content Creation',
    imageUrl: '/images/copyai.svg',
    link: 'https://www.copy.ai',
    isFree: true,
    tags: ['content-writing', 'copywriting', 'marketing']
  },
  {
    id: '9',
    title: 'Writesonic',
    description: 'An AI writer that helps create SEO-friendly content for blogs, ads, landing pages, and product descriptions.',
    category: 'Content Creation',
    imageUrl: '/images/writesonic.svg',
    link: 'https://writesonic.com',
    isFree: true,
    tags: ['content-writing', 'copywriting', 'marketing']
  },
  {
    id: '10',
    title: 'Stable Diffusion',
    description: 'An open-source AI art generation model that creates detailed images based on text descriptions.',
    category: 'Image Generation',
    imageUrl: '/images/stablediffusion.svg',
    link: 'https://stability.ai',
    isFree: true,
    tags: ['image-generation', 'text-to-image', 'ai-art']
  },
  {
    id: '11',
    title: 'GitHub Copilot',
    description: 'An AI pair programmer that offers code suggestions based on comments and context.',
    category: 'Development',
    imageUrl: '/images/githubcopilot.svg',
    link: 'https://github.com/features/copilot',
    isFree: false,
    tags: ['programming', 'code-assistant', 'development']
  },
  {
    id: '12',
    title: 'Tabnine',
    description: 'An AI code completion tool that helps developers write code faster with whole-line and full-function completions.',
    category: 'Development',
    imageUrl: '/images/tabnine.svg',
    link: 'https://www.tabnine.com',
    isFree: true,
    tags: ['programming', 'code-assistant', 'development']
  }
];

export default function HashtagDetailPage({ params }: { params: { tag: string } }) {
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);
  const { tag } = unwrappedParams;

  const hashtag = hashtagsData[tag as keyof typeof hashtagsData];

  // Filter tools by tag
  const taggedTools = toolsData.filter(tool => {
    return tool.tags && tool.tags.includes(tag);
  });

  if (!hashtag) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-foreground">Hashtag not found</h1>
          <p className="mt-4 text-foreground opacity-80">The hashtag you're looking for doesn't exist or has been removed.</p>
          <Link href="/" className="mt-8 inline-flex items-center text-primary hover:text-accent">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-primary text-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <Link href="/" className="inline-flex items-center text-white hover:text-accent mb-4 transition-colors duration-200">
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                #{hashtag.title}
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl">
                {hashtag.description}
              </p>
            </div>
          </div>
        </div>

        {/* Related Hashtags */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-card-bg rounded-lg border border-card-border shadow-sm p-6 mb-12 transition-colors duration-200">
            <h2 className="text-2xl font-bold text-foreground mb-4 transition-colors duration-200">Related Hashtags</h2>
            <div className="flex flex-wrap gap-2">
              {hashtag.relatedTags.map((relatedTag) => (
                <Link
                  key={relatedTag}
                  href={`/hashtag/${relatedTag}`}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  #{hashtagsData[relatedTag as keyof typeof hashtagsData]?.title || relatedTag}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-card-bg p-4 rounded-lg shadow-sm text-foreground border border-card-border transition-colors duration-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder={`Search tools with #${hashtag.title}...`}
                  className="w-full px-4 py-2 border border-input-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input-bg text-input-text placeholder-input-placeholder transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <select className="px-4 py-2 border border-input-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input-bg text-input-text transition-colors duration-200">
                  <option value="">Sort By: Newest</option>
                  <option value="popular">Most Popular</option>
                  <option value="az">A-Z</option>
                  <option value="za">Z-A</option>
                </select>
                <select className="px-4 py-2 border border-input-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input-bg text-input-text transition-colors duration-200">
                  <option value="">All</option>
                  <option value="free">Free Only</option>
                  <option value="paid">Paid Only</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {taggedTools.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {taggedTools.map((tool) => (
                <ToolCard key={tool.id} {...tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-foreground transition-colors duration-200">No tools found with this hashtag</h3>
              <p className="mt-2 text-foreground opacity-80 transition-colors duration-200">Check back later for updates or explore other hashtags.</p>
            </div>
          )}

          {/* Pagination */}
          {taggedTools.length > 0 && (
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 rounded-l-md border border-card-border bg-card-bg text-sm font-medium text-foreground hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 border border-card-border bg-primary text-sm font-medium text-white hover:bg-primary-dark transition-colors duration-200"
                >
                  1
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 border border-card-border bg-card-bg text-sm font-medium text-foreground hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  2
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 rounded-r-md border border-card-border bg-card-bg text-sm font-medium text-foreground hover:bg-primary hover:text-white transition-colors duration-200"
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
