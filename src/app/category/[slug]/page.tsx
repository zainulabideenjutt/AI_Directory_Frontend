'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Newsletter from '../../../components/Newsletter';
import ToolCard from '../../../components/ToolCard';

// Sample category data
const categories = {
  'chatbots': {
    id: '1',
    title: 'Chatbots',
    description: 'AI assistants and conversational interfaces that can understand and respond to human language.',
    longDescription: 'Chatbots are AI-powered virtual assistants that can simulate conversation with human users. They use natural language processing (NLP) to understand user queries and provide relevant responses. Chatbots can be used for customer service, information retrieval, task automation, and more. They range from simple rule-based systems to sophisticated AI models capable of understanding context and generating human-like responses.',
    icon: '/images/ai-content.svg',
  },
  'image-generation': {
    id: '2',
    title: 'Image Generation',
    description: 'AI tools that can create and edit images based on text prompts or other inputs.',
    longDescription: 'AI image generation tools use deep learning models to create visual content from text descriptions or other inputs. These tools can generate realistic images, artwork, and designs without requiring traditional artistic skills. They employ various techniques like GANs (Generative Adversarial Networks) or diffusion models to create images that match specific descriptions, styles, or requirements.',
    icon: '/images/ai-content.svg',
  },
  'content-creation': {
    id: '3',
    title: 'Content Creation',
    description: 'AI tools that help create written content like articles, blogs, and marketing copy.',
    longDescription: 'AI content creation tools assist in generating written material for various purposes. They can help write blog posts, articles, social media content, marketing copy, and more. These tools use natural language generation capabilities to produce human-like text based on prompts or outlines. They can save time, overcome writer\'s block, and provide inspiration for content creators.',
    icon: '/images/ai-content.svg',
  },
  'development': {
    id: '5',
    title: 'Development',
    description: 'Coding assistants and developer tools powered by AI to improve programming efficiency.',
    longDescription: 'AI development tools assist programmers and developers in writing, debugging, and optimizing code. These tools can generate code snippets, complete functions, suggest improvements, and help troubleshoot issues. They support various programming languages and frameworks, making software development faster and more efficient. Some tools can even convert natural language descriptions into functional code.',
    icon: '/images/ai-content.svg',
  },
  // Add more categories as needed
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
    isFree: true
  },
  {
    id: '2',
    title: 'Claude',
    description: 'An AI assistant by Anthropic designed to be helpful, harmless, and honest in its interactions.',
    category: 'Chatbots',
    imageUrl: '/images/claude.svg',
    link: 'https://claude.ai',
    isFree: true
  },
  {
    id: '3',
    title: 'Bard',
    description: 'Google\'s conversational AI service powered by the PaLM large language model.',
    category: 'Chatbots',
    imageUrl: '/images/bard.svg',
    link: 'https://bard.google.com',
    isFree: true
  },
  {
    id: '4',
    title: 'DALL-E',
    description: 'An AI system by OpenAI that can create realistic images and art from natural language descriptions.',
    category: 'Image Generation',
    imageUrl: '/images/dalle.svg',
    link: 'https://openai.com/dall-e-2',
    isFree: false
  },
  {
    id: '5',
    title: 'Hugging Face',
    description: 'A platform that provides access to thousands of pre-trained models for natural language processing, computer vision, and more.',
    category: 'Development',
    imageUrl: '/images/huggingface.svg',
    link: 'https://huggingface.co',
    isFree: true
  },
  {
    id: '6',
    title: 'Midjourney',
    description: 'An AI program that generates images from textual descriptions, similar to OpenAI\'s DALL-E and Stable Diffusion.',
    category: 'Image Generation',
    imageUrl: '/images/midjourney.svg',
    link: 'https://www.midjourney.com',
    isFree: false
  },
  {
    id: '7',
    title: 'Jasper',
    description: 'An AI content platform that helps create marketing copy, social media posts, and long-form content.',
    category: 'Content Creation',
    imageUrl: '/images/jasper.svg',
    link: 'https://www.jasper.ai',
    isFree: false
  },
  {
    id: '8',
    title: 'Copy.ai',
    description: 'An AI-powered copywriter that generates high-quality content for blogs, ads, emails, and more.',
    category: 'Content Creation',
    imageUrl: '/images/copyai.svg',
    link: 'https://www.copy.ai',
    isFree: true
  },
  {
    id: '9',
    title: 'Writesonic',
    description: 'An AI writer that helps create SEO-friendly content for blogs, ads, landing pages, and product descriptions.',
    category: 'Content Creation',
    imageUrl: '/images/writesonic.svg',
    link: 'https://writesonic.com',
    isFree: true
  },
  {
    id: '10',
    title: 'Stable Diffusion',
    description: 'An open-source AI art generation model that creates detailed images based on text descriptions.',
    category: 'Image Generation',
    imageUrl: '/images/stablediffusion.svg',
    link: 'https://stability.ai',
    isFree: true
  }
];

export default function CategoryDetailPage({ params }: { params: { slug: string } }) {
  // Unwrap params using React.use()
  const { slug } = React.use(params);

  const category = categories[slug as keyof typeof categories];

  // Filter tools by category
  const categoryTools = toolsData.filter(tool => {
    return tool.category.toLowerCase() === category?.title.toLowerCase();
  });

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-foreground">Category not found</h1>
          <p className="mt-4 text-foreground opacity-80">The category you're looking for doesn't exist or has been removed.</p>
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
                Back to Categories
              </Link>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                {category.title}
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl">
                {category.description}
              </p>
            </div>
          </div>
        </div>

        {/* Category Description */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-card-bg rounded-lg border border-card-border shadow-sm p-6 mb-12 transition-colors duration-200">
            <h2 className="text-2xl font-bold text-foreground mb-4 transition-colors duration-200">About {category.title}</h2>
            <p className="text-foreground transition-colors duration-200">{category.longDescription}</p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-card-bg p-4 rounded-lg shadow-sm text-foreground border border-card-border transition-colors duration-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder={`Search ${category.title}...`}
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
          {categoryTools.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categoryTools.map((tool) => (
                <ToolCard key={tool.id} {...tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-foreground transition-colors duration-200">No tools found in this category</h3>
              <p className="mt-2 text-foreground opacity-80 transition-colors duration-200">Check back later for updates or explore other categories.</p>
            </div>
          )}

          {/* Pagination */}
          {categoryTools.length > 0 && (
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
