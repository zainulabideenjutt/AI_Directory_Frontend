import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ToolCard from '../../components/ToolCard';
import Newsletter from '../../components/Newsletter';

// Sample data for top AI tools by category
const categories = [
  {
    id: 'chatbots',
    name: 'Chatbots',
    tools: [
      {
        id: '1',
        title: 'ChatGPT',
        description: 'An AI language model that can engage in conversation, answer questions, assist with tasks, and generate various types of content.',
        category: 'Chatbot',
        imageUrl: '/images/chatgpt.svg',
        link: 'https://chat.openai.com',
        isFree: true
      },
      {
        id: '12',
        title: 'Claude',
        description: 'An AI assistant built by Anthropic to be helpful, harmless, and honest.',
        category: 'Chatbot',
        imageUrl: '/images/claude.svg',
        link: 'https://claude.ai',
        isFree: true
      },
      {
        id: '13',
        title: 'Bard',
        description: 'Google\'s conversational AI service powered by the Gemini model.',
        category: 'Chatbot',
        imageUrl: '/images/bard.svg',
        link: 'https://bard.google.com',
        isFree: true
      }
    ]
  },
  {
    id: 'image-generation',
    name: 'Image Generation',
    tools: [
      {
        id: '2',
        title: 'DALL-E',
        description: 'An AI system that can create realistic images and art from a description in natural language.',
        category: 'Image Generation',
        imageUrl: '/images/dalle.svg',
        link: 'https://openai.com/dall-e-2',
        isFree: false
      },
      {
        id: '3',
        title: 'Midjourney',
        description: 'An AI program that generates images from textual descriptions, similar to OpenAI\'s DALL-E and Stable Diffusion.',
        category: 'Image Generation',
        imageUrl: '/images/midjourney.svg',
        link: 'https://www.midjourney.com',
        isFree: false
      },
      {
        id: '14',
        title: 'Stable Diffusion',
        description: 'An open-source text-to-image model that can generate detailed images based on text descriptions.',
        category: 'Image Generation',
        imageUrl: '/images/stablediffusion.svg',
        link: 'https://stability.ai',
        isFree: true
      }
    ]
  },
  {
    id: 'content-creation',
    name: 'Content Creation',
    tools: [
      {
        id: '4',
        title: 'Jasper',
        description: 'AI content platform that helps create high-quality content for marketing, blogs, social media, and more.',
        category: 'Content Creation',
        imageUrl: '/images/jasper.svg',
        link: 'https://www.jasper.ai',
        isFree: false
      },
      {
        id: '15',
        title: 'Copy.ai',
        description: 'An AI-powered copywriter that generates high-quality copy for various purposes.',
        category: 'Content Creation',
        imageUrl: '/images/copyai.svg',
        link: 'https://www.copy.ai',
        isFree: true
      },
      {
        id: '16',
        title: 'Writesonic',
        description: 'An AI writer that helps create SEO-friendly content for blogs, ads, emails, and more.',
        category: 'Content Creation',
        imageUrl: '/images/writesonic.svg',
        link: 'https://writesonic.com',
        isFree: true
      }
    ]
  }
];

export default function TopTenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Top 10 AI Tools by Category
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl">
                Discover the best AI tools in each category, carefully selected and ranked by our experts.
              </p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category.id} className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
                <a 
                  href={`/category/${category.id}`} 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View All →
                </a>
              </div>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.tools.map((tool) => (
                  <ToolCard key={tool.id} {...tool} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}