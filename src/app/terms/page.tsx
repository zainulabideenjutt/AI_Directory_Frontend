import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Newsletter from '../../components/Newsletter';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-primary text-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Terms of Service
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl">
                Please read these terms carefully before using our platform.
              </p>
            </div>
          </div>
        </div>

        {/* Terms of Service Content */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="text-black">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-dark">1. Agreement to Terms</h2>
            <p className="text-black">
              By accessing or using Aixploria ("the Site"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-dark">2. Use License</h2>
            <p className="text-black">
              Permission is granted to temporarily access the materials on Aixploria's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-black">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>Attempt to decompile or reverse engineer any software contained on Aixploria's website;</li>
              <li>Remove any copyright or other proprietary notations from the materials; or</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p className="text-black">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by Aixploria at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-dark">3. Disclaimer</h2>
            <p className="text-black">
              The materials on Aixploria's website are provided on an 'as is' basis. Aixploria makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="text-black">
              Further, Aixploria does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-dark">4. Limitations</h2>
            <p className="text-black">
              In no event shall Aixploria or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Aixploria's website, even if Aixploria or a Aixploria authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-dark">5. Accuracy of Materials</h2>
            <p className="text-black">
              The materials appearing on Aixploria's website could include technical, typographical, or photographic errors. Aixploria does not warrant that any of the materials on its website are accurate, complete or current. Aixploria may make changes to the materials contained on its website at any time without notice. However Aixploria does not make any commitment to update the materials.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-dark">6. Links</h2>
            <p className="text-black">
              Aixploria has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Aixploria of the site. Use of any such linked website is at the user's own risk.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-dark">7. Modifications</h2>
            <p className="text-black">
              Aixploria may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-dark">8. Governing Law</h2>
            <p className="text-black">
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-dark">9. User Accounts</h2>
            <p className="text-black">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            <p className="text-black">
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
            </p>
            <p className="text-black">
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-dark">10. Intellectual Property</h2>
            <p className="text-black">
              The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Aixploria and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Aixploria.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-dark">11. Termination</h2>
            <p className="text-black">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-black">
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-dark">12. Contact Us</h2>
            <p className="text-black">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-black">
              Aixploria<br />
              Email: terms@aixploria.com
            </p>
          </div>
        </div>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}