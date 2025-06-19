import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Newsletter from '../../components/Newsletter';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-primary text-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                About Ai Directory Center
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl">
                Your trusted guide to the world of artificial intelligence tools and resources.
              </p>
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary-dark">Our Mission</h2>
            <p className="text-black">
              At Ai Directory Center, we believe that artificial intelligence should be accessible to everyone. Our mission is to curate and organize the vast landscape of AI tools, making it easy for users of all technical backgrounds to discover and utilize the power of AI in their daily lives and work.
            </p>
            
            <h2 className="text-3xl font-bold text-center my-8 text-primary-dark">What We Do</h2>
            <p className="text-black">
              We meticulously research, test, and categorize AI tools from across the web, providing you with comprehensive information about each tool's capabilities, pricing, and use cases. Whether you're a professional looking to enhance your workflow, a creator seeking AI-powered inspiration, or simply curious about what AI can do, Ai Directory Center is your guide.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
              <div className="bg-white p-6 rounded-lg border border-primary shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-primary-dark">Curated Selection</h3>
                <p className="text-black">We handpick the best AI tools across various categories to ensure quality and relevance.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-primary shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-primary-dark">Detailed Reviews</h3>
                <p className="text-black">Our team provides in-depth analysis of each tool's features, benefits, and limitations.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-primary shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-primary-dark">User Community</h3>
                <p className="text-black">Join our growing community of AI enthusiasts to share experiences and discover new tools.</p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-center my-8 text-primary-dark">Our Team</h2>
            <p className="text-black">
              Ai Directory Center is powered by a diverse team of AI enthusiasts, developers, and content creators who share a passion for making technology more accessible. Our combined expertise in machine learning, user experience, and digital content allows us to provide a comprehensive and user-friendly platform.
            </p>
            
            <h2 className="text-3xl font-bold text-center my-8 text-primary-dark">Join Our Journey</h2>
            <p className="text-black">
              The world of AI is constantly evolving, and we're committed to growing alongside it. We invite you to join us on this exciting journey of discovery and innovation. Whether you're submitting a new tool, sharing feedback, or simply exploring our directory, you're helping to build a more accessible AI ecosystem for everyone.
            </p>
          </div>
        </div>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}