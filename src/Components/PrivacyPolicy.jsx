import React from 'react';
import { Link } from "react-router-dom";
import bgImage from "../Assets/environmental-protection-326923_1280.jpg";
import Logo from "../Assets/logo.redifu-removebg-preview.png";

const PrivacyPolicy = () => {
  return (
    <section
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-24 h-10 mr-2" src={Logo} alt="logo" />
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="backdrop-blur-lg bg-white/30 dark:bg-white/10 shadow-lg p-8 rounded-lg w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-6">
              Privacy Policy
            </h1>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                At RediFu, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website and services (the "Service"). By using the Service, you consent to the practices described in this policy.
              </p>

              <h2 className="text-lg font-semibold mt-4">1. Information We Collect</h2>
              <p>
                We collect the following types of information:
                <ul className="list-disc pl-5 mt-2">
                  <li><strong>Personal Information:</strong> When you create an account, we collect your email address and password. For payment processing (e.g., organization subscriptions), we may collect additional details such as your phone number and payment information via our third-party payment processor, Pesapal.</li>
                  <li><strong>Usage Data:</strong> We collect information about how you interact with the Service, such as IP addresses, browser type, pages visited, and timestamps.</li>
                  <li><strong>Organization Metrics:</strong> If you are an organization user, we collect data related to food waste metrics, as stored in Firebase Firestore.</li>
                </ul>
              </p>

              <h2 className="text-lg font-semibold mt-4">2. How We Use Your Information</h2>
              <p>
                We use your information to:
                <ul className="list-disc pl-5 mt-2">
                  <li>Provide and improve the Service (e.g., authenticate users, process payments).</li>
                  <li>Communicate with you (e.g., respond to inquiries, send service updates).</li>
                  <li>Analyze usage to enhance user experience and functionality.</li>
                  <li>Comply with legal obligations under applicable laws, such as Kenya’s Data Protection Act 2019.</li>
                </ul>
              </p>

              <h2 className="text-lg font-semibold mt-4">3. Sharing Your Information</h2>
              <p>
                We may share your information with:
                <ul className="list-disc pl-5 mt-2">
                  <li><strong>Third-Party Service Providers:</strong> We use Firebase (Google LLC) for authentication and data storage, and Pesapal for payment processing. These providers have their own privacy policies.</li>
                  <li><strong>Legal Authorities:</strong> If required by law or to protect our rights, we may disclose your information to comply with legal obligations.</li>
                </ul>
              </p>

              <h2 className="text-lg font-semibold mt-4">4. Data Security</h2>
              <p>
                We implement reasonable security measures to protect your data, including encryption for authentication credentials (via Firebase) and secure payment processing (via Pesapal). However, no system is completely secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-lg font-semibold mt-4">5. Your Rights</h2>
              <p>
                Under Kenya’s Data Protection Act 2019 and other applicable laws, you have the right to:
                <ul className="list-disc pl-5 mt-2">
                  <li>Access, correct, or delete your personal data.</li>
                  <li>Object to or restrict certain data processing activities.</li>
                  <li>Request data portability.</li>
                </ul>
                To exercise these rights, contact us at <a href="mailto:support@redifu.com" className="text-blue-500 hover:underline">support@redifu.com</a>.
              </p>

              <h2 className="text-lg font-semibold mt-4">6. Cookies and Tracking</h2>
              <p>
                We use cookies to authenticate users and track usage (e.g., via Firebase Analytics). You can manage cookie preferences through your browser settings.
              </p>

              <h2 className="text-lg font-semibold mt-4">7. Data Retention</h2>
              <p>
                We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy or as required by law. For example, account data is retained until you delete your account, and usage data may be anonymized for analytics.
              </p>

              <h2 className="text-lg font-semibold mt-4">8. International Data Transfers</h2>
              <p>
                Your data may be transferred to and processed in countries outside Kenya (e.g., by Firebase servers in the US). We ensure such transfers comply with applicable data protection laws.
              </p>

              <h2 className="text-lg font-semibold mt-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page, and continued use of the Service constitutes acceptance of the updated policy.
              </p>

              <p className="mt-6">
                For questions or concerns, contact us at <a href="mailto:support@redifu.com" className="text-blue-500 hover:underline">support@redifu.com</a>.
              </p>
              <p className="text-sm mt-4">
                Last updated: March 06, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;