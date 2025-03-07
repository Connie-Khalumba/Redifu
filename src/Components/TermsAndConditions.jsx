import React from 'react';
import { Link } from "react-router-dom";
import bgImage from "../Assets/environmental-protection-326923_1280.jpg";
import Logo from "../Assets/logo.redifu-removebg-preview.png";

const TermsAndConditions = () => {
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
              Terms and Conditions
            </h1>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Welcome to RediFu! These Terms and Conditions ("Terms") govern your use of the RediFu website and services (the "Service"), provided by RediFu ("us", "we", or "our"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, please do not use the Service.
              </p>

              <h2 className="text-lg font-semibold mt-4">1. Acceptance of Terms</h2>
              <p>
                By creating an account or using the Service, you confirm that you are at least 18 years old and capable of entering into a binding agreement. We reserve the right to update these Terms at any time, and continued use constitutes acceptance of the revised Terms.
              </p>

              <h2 className="text-lg font-semibold mt-4">2. Account Registration</h2>
              <p>
                To use certain features (e.g., payment processing), you must register an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately of any unauthorized use.
              </p>

              <h2 className="text-lg font-semibold mt-4">3. Payment and Subscription</h2>
              <p>
                The Service may require payment for subscriptions (e.g., organization fees processed via Pesapal). All payments are final unless otherwise stated. We are not liable for payment processing errors by third-party providers (e.g., Pesapal).
              </p>

              <h2 className="text-lg font-semibold mt-4">4. Use of Service</h2>
              <p>
                You agree to use the Service only for lawful purposes and in accordance with these Terms. You may not use the Service to transmit malware, infringe on intellectual property, or engage in fraudulent activities.
              </p>

              <h2 className="text-lg font-semibold mt-4">5. Data Privacy</h2>
              <p>
                We collect and process personal data (e.g., email, payment details) in accordance with our Privacy Policy. By using the Service, you consent to such processing. We use third-party services (e.g., Firebase, Pesapal) that may have their own data policies.
              </p>

              <h2 className="text-lg font-semibold mt-4">6. Intellectual Property</h2>
              <p>
                All content, logos, and code on the Service are owned by RediFu or its licensors. You may not reproduce, distribute, or modify this content without prior written consent.
              </p>

              <h2 className="text-lg font-semibold mt-4">7. Limitation of Liability</h2>
              <p>
                RediFu is not liable for any indirect, incidental, or consequential damages arising from your use of the Service. The Service is provided "as is" without warranties of any kind, except as required by law.
              </p>

              <h2 className="text-lg font-semibold mt-4">8. Termination</h2>
              <p>
                We may terminate or suspend your account at our discretion for violation of these Terms. Upon termination, your right to use the Service ceases immediately.
              </p>

              <h2 className="text-lg font-semibold mt-4">9. Governing Law</h2>
              <p>
                These Terms are governed by the laws of Kenya. Any disputes will be resolved in Kenyan courts.
              </p>

              <p className="mt-6">
                For questions, contact us at <a href="mailto:support@redifu.com" className="text-blue-500 hover:underline">support@redifu.com</a>.
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

export default TermsAndConditions;