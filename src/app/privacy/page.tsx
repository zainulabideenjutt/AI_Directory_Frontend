import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Newsletter from '../../components/Newsletter';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-primary text-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Privacy Policy
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl">
                How we collect, use, and protect your information.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Policy Content */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="text-black">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-dark">Introduction</h2>
            <p className="text-black">
              At Aixploria ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, including any other media form, media channel, mobile website, or mobile application related or connected to it (collectively, the "Site").
            </p>
            <p className="text-black">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-dark">Information We Collect</h2>
            <p className="text-black">
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-2 text-primary-dark">Personal Data</h3>
            <p className="text-black">
              Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as submitting AI tools or contacting us. You are under no obligation to provide us with personal information of any kind, however, your refusal to do so may prevent you from using certain features of the Site.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-2 text-primary-dark">Derivative Data</h3>
            <p className="text-black">
              Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-2 text-primary-dark">Financial Data</h3>
            <p className="text-black">
              We do not collect or store financial information, such as your payment method (valid credit card number, expiration date). Any financial information will be collected and processed by our third-party payment processors.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-2 text-primary-dark">Data From Social Networks</h3>
            <p className="text-black">
              User information from social networking sites, such as name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-dark">Use of Your Information</h2>
            <p className="text-black">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc pl-6 text-black">
              <li>Create and manage your account.</li>
              <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
              <li>Email you regarding your account or order.</li>
              <li>Enable user-to-user communications.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
              <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
              <li>Increase the efficiency and operation of the Site.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              <li>Notify you of updates to the Site.</li>
              <li>Offer new products, services, and/or recommendations to you.</li>
              <li>Perform other business activities as needed.</li>
              <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
              <li>Process payments and refunds.</li>
              <li>Request feedback and contact you about your use of the Site.</li>
              <li>Resolve disputes and troubleshoot problems.</li>
              <li>Respond to product and customer service requests.</li>
              <li>Send you a newsletter.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-dark">Disclosure of Your Information</h2>
            <p className="text-black">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-2 text-primary-dark">By Law or to Protect Rights</h3>
            <p className="text-black">
              If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-2 text-primary-dark">Third-Party Service Providers</h3>
            <p className="text-black">
              We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-2 text-primary-dark">Marketing Communications</h3>
            <p className="text-black">
              With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-2 text-primary-dark">Interactions with Other Users</h3>
            <p className="text-black">
              If you interact with other users of the Site, those users may see your name, profile photo, and descriptions of your activity.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-2 text-primary-dark">Online Postings</h3>
            <p className="text-black">
              When you post comments, contributions or other content to the Site, your posts may be viewed by all users and may be publicly distributed outside the Site in perpetuity.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-dark">Security of Your Information</h2>
            <p className="text-black">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-dark">Contact Us</h2>
            <p className="text-black">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p className="text-black">
              Aixploria<br />
              Email: privacy@aixploria.com
            </p>
          </div>
        </div>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}