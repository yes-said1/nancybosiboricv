import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-sm text-gray-500">Last updated: August 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to our platform. This Privacy Policy explains how we collect,
          use, and protect your personal information when you interact with our
          website, services, and applications. By using our platform, you agree
          to the practices described here.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, email address, account
            details, and login credentials.
          </li>
          <li>
            <strong>Usage Data:</strong> IP address, browser type, device
            information, and pages visited.
          </li>
          <li>
            <strong>Access Requests:</strong> Information submitted when you
            request access to our platform.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide and improve our services.</li>
          <li>To verify your identity and manage access rights.</li>
          <li>To communicate updates, security alerts, or account information.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal information. We may share your
          data with:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Service providers who assist in operating our platform.</li>
          <li>Regulatory authorities when required by law.</li>
          <li>In case of a merger, acquisition, or business transfer.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to
          safeguard your data against unauthorized access, alteration,
          disclosure, or destruction.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
        <p>You may have rights under applicable laws, including:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Accessing, correcting, or deleting your personal data.</li>
          <li>Restricting or objecting to certain processing activities.</li>
          <li>Withdrawing consent at any time.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Cookies</h2>
        <p>
          We use cookies and similar technologies to enhance user experience,
          analyze site traffic, and provide personalized services. You can
          manage cookie preferences through your browser settings.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Updates will be
          posted on this page with a revised “Last updated” date.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us at:
        </p>
        <p className="mt-2">
          Email: <a href="mailto:info@example.com" className="text-blue-600">bosborynnc@gmail.com or via the contact form</a>
        </p>
      </section>
    </motion.div>
  );
};

export default PrivacyPolicy;
