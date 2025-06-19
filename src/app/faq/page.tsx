import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Newsletter from '../../components/Newsletter';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-primary text-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl">
                Find answers to common questions about Aixploria and AI tools.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-primary">
            <h2 className="text-3xl font-extrabold text-black text-center mb-8">Frequently Asked Questions</h2>

            <div className="mt-8">
              <dl className="divide-y divide-primary">
                <div className="pt-6 pb-8">
                  <dt className="text-lg">
                    <button className="text-left w-full flex justify-between items-start text-black">
                      <span className="font-medium text-primary-dark">What is Aixploria?</span>
                    </button>
                  </dt>
                  <dd className="mt-2 pr-12">
                    <p className="text-base text-black">
                      Aixploria is a comprehensive directory of AI tools and resources. We curate and categorize the best AI tools available on the web to help users discover solutions for their specific needs.
                    </p>
                  </dd>
                </div>

                <div className="pt-6 pb-8">
                  <dt className="text-lg">
                    <button className="text-left w-full flex justify-between items-start text-black">
                      <span className="font-medium text-primary-dark">Are all the tools on Aixploria free?</span>
                    </button>
                  </dt>
                  <dd className="mt-2 pr-12">
                    <p className="text-base text-black">
                      No, we list both free and paid AI tools. Each tool listing clearly indicates whether it&apos;s free, has a free tier, or is a paid service. We have a dedicated section for free AI tools that you can access from our navigation menu.
                    </p>
                  </dd>
                </div>

                <div className="pt-6 pb-8">
                  <dt className="text-lg">
                    <button className="text-left w-full flex justify-between items-start text-black">
                      <span className="font-medium text-primary-dark">How do you select which AI tools to include?</span>
                    </button>
                  </dt>
                  <dd className="mt-2 pr-12">
                    <p className="text-base text-black">
                      Our team researches and evaluates AI tools based on their functionality, user experience, reliability, and value. We prioritize tools that offer unique capabilities, have positive user reviews, and demonstrate ongoing development and support.
                    </p>
                  </dd>
                </div>

                <div className="pt-6 pb-8">
                  <dt className="text-lg">
                    <button className="text-left w-full flex justify-between items-start text-black">
                      <span className="font-medium text-primary-dark">Can I submit my AI tool to be listed on Aixploria?</span>
                    </button>
                  </dt>
                  <dd className="mt-2 pr-12">
                    <p className="text-base text-black">
                      Yes! We welcome submissions from AI tool developers and creators. You can submit your tool through our submission form, and our team will review it for potential inclusion in our directory.
                    </p>
                  </dd>
                </div>

                <div className="pt-6 pb-8">
                  <dt className="text-lg">
                    <button className="text-left w-full flex justify-between items-start text-black">
                      <span className="font-medium text-primary-dark">How often do you update the directory?</span>
                    </button>
                  </dt>
                  <dd className="mt-2 pr-12">
                    <p className="text-base text-black">
                      We continuously update our directory with new AI tools and review existing listings to ensure information is current. The AI landscape evolves rapidly, and we&apos;re committed to providing the most up-to-date information possible.
                    </p>
                  </dd>
                </div>

                <div className="pt-6 pb-8">
                  <dt className="text-lg">
                    <button className="text-left w-full flex justify-between items-start text-black">
                      <span className="font-medium text-primary-dark">Do you offer reviews or ratings for the AI tools?</span>
                    </button>
                  </dt>
                  <dd className="mt-2 pr-12">
                    <p className="text-base text-black">
                      Yes, we provide brief overviews and key information for each tool. For selected tools, we offer more in-depth reviews that analyze features, usability, and potential use cases. We&apos;re continuously expanding our review coverage.
                    </p>
                  </dd>
                </div>

                <div className="pt-6 pb-8">
                  <dt className="text-lg">
                    <button className="text-left w-full flex justify-between items-start text-black">
                      <span className="font-medium text-primary-dark">How can I contact Aixploria with questions or feedback?</span>
                    </button>
                  </dt>
                  <dd className="mt-2 pr-12">
                    <p className="text-base text-black">
                      You can reach us through our <a href="/contact" className="text-primary hover:text-accent">Contact page</a>. We welcome your questions, suggestions, and feedback to help us improve our platform.
                    </p>
                  </dd>
                </div>

                <div className="pt-6 pb-8">
                  <dt className="text-lg">
                    <button className="text-left w-full flex justify-between items-start text-black">
                      <span className="font-medium text-primary-dark">Is Aixploria affiliated with any of the listed AI tools?</span>
                    </button>
                  </dt>
                  <dd className="mt-2 pr-12">
                    <p className="text-base text-black">
                      Aixploria is an independent directory. While we may have affiliate relationships with some tools (which are clearly disclosed), our primary goal is to provide unbiased information to help users find the right AI solutions for their needs.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}