import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0B1E3F] to-[#123C69] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-200">
          Please read these terms carefully before using this website.
        </p>
        <p className="mt-4 text-sm text-gray-300">
          Last updated: August 20, 2025
        </p>
      </section>

      {/* Content */}
      <section className="py-16 px-6 md:px-20 max-w-5xl mx-auto">
        {/* Intro */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm mb-10">
          <p className="text-gray-700 leading-relaxed">
            These Terms of Service (“Terms”) govern your access to and use of the website,
            services, and content made available by{" "}
            <span className="font-semibold">Nancy Bosibori</span> (the “Site,” “we,” “us,” or “our”).
            By accessing or using the Site, you agree to be bound by these Terms and our{" "}
            <Link to="/privacy" className="underline decoration-[#FFD700] decoration-2 underline-offset-4">
              Privacy Policy
            </Link>. If you do not agree, please do not use the Site.
          </p>
        </div>

        {/* Quick Nav */}
        <nav className="mb-10">
          <h2 className="text-xl font-bold text-[#0B1E3F] mb-4">Table of Contents</h2>
          <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
            {[
              ["Acceptance of Terms", "acceptance-of-terms"],
              ["Eligibility", "eligibility"],
              ["Use of the Site", "use-of-the-site"],
              ["Accounts & Security", "accounts-security"],
              ["User Content & Feedback", "user-content"],
              ["Intellectual Property", "intellectual-property"],
              ["Prohibited Activities", "prohibited-activities"],
              ["Third-Party Links & Tools", "third-party-links"],
              ["No Warranties", "no-warranties"],
              ["Limitation of Liability", "limitation-liability"],
              ["Indemnification", "indemnification"],
              ["Termination", "termination"],
              ["Governing Law & Disputes", "governing-law"],
              ["Changes to the Terms", "changes"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-[#0B1E3F] underline decoration-[#FFD700] decoration-2 underline-offset-4">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sections */}
        <div className="space-y-10 leading-relaxed text-gray-700">
          <section id="acceptance-of-terms">
            <h3 className="text-2xl font-bold text-[#0B1E3F] mb-3">1) Acceptance of Terms</h3>
            <p>
              By accessing or using the Site, you confirm that you have read, understood, and agree to be bound
              by these Terms. If you are using the Site on behalf of an organization, you represent that you have
              authority to bind that organization to these Terms.
            </p>
          </section>

          <section id="eligibility">
            <h3 className="text-2xl font-bold text-[#0B1E3F] mb-3">2) Eligibility</h3>
            <p>
              You must be at least the age of majority in your jurisdiction (or have parental consent) to use this Site.
              You also agree that you are not barred from using the Site under any applicable laws.
            </p>
          </section>

          <section id="use-of-the-site">
            <h3 className="text-2xl font-bold text-[#0B1E3F] mb-3">3) Use of the Site</h3>
            <p className="mb-2">
              We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Site
              for personal or internal business purposes. You agree to use the Site only for lawful purposes and in
              accordance with these Terms.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Do not attempt to gain unauthorized access to the Site or related systems.</li>
              <li>Do not interfere with or disrupt the integrity or performance of the Site.</li>
              <li>Do not use automated means (e.g., bots, scrapers) without prior written permission.</li>
              <li>Do not impersonate any person or misrepresent your affiliation with any person or entity.</li>
            </ul>
          </section>

          <section id="accounts-security">
            <h3 className="text-2xl font-bold text-[#0B1E3F] mb-3">4) Accounts & Security</h3>
            <p className="mb-2">
              If any portion of the Site requires an account, you agree to provide accurate information and to
              keep your credentials confidential. You are responsible for all activities that occur under your
              account and must promptly notify us of any unauthorized use or security breach.
            </p>
          </section>

          <section id="user-content">
            <h3 className="text-2xl font-bold text-[#0B1E3F] mb-3">5) User Content & Feedback</h3>
            <p className="mb-2">
              If you submit content (e.g., messages via the contact form, testimonials, or feedback), you grant us
              a non-exclusive, worldwide, royalty-free license to use, reproduce, and display that content for the
              purposes of operating and improving the Site and our services. You represent that you own or have the
              necessary rights to the content you submit and that it does not infringe any third-party rights.
            </p>
          </section>

          <section id="intellectual-property">
            <h3 className="text-2xl font-bold text-[#0B1E3F] mb-3">6) Intellectual Property</h3>
            <p className="mb-2">
              All content on the Site—including text, graphics, logos, and design elements—is owned by or licensed
              to us and is protected by applicable intellectual property laws. Except as expressly allowed by these
              Terms, you may not copy, modify, distribute, or create derivative works from any part of the Site
              without prior written consent.
            </p>
          </section>

          <section id="prohibited-activities">
            <h3 className="text-2xl font-bold text-[#0B1E3F] mb-3">7) Prohibited Activities</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Illegal, harmful, fraudulent, or misleading activities.</li>
              <li>Infringing others’ intellectual property, privacy, or publicity rights.</li>
              <li>Attempting to reverse engineer or derive the source code of the Site.</li>
              <li>Uploading malicious code, viruses, or harmful scripts.</li>
              <li>Collecting data without consent or in violation of applicable laws.</li>
            </ul>
          </section>

          <section id="third-party-links">
            <h3 className="text-2xl font-bold text-[#0B1E3F] mb-3">8) Third-Party Links & Tools</h3>
            <p className="mb-2">
              The Site may contain links to third-party websites or tools (e.g., Google Maps embed). We do not
              control and are not responsible for the content, policies, or practices of third parties. Your use of
              third-party sites or services is at your own risk and subject to their terms and policies.
            </p>
          </section>

          <section id="no-warranties">
            <h3 className="text-2xl font-bold text-[#0B1E3F] mb-3">9) No Warranties</h3>
            <p>
              The Site is provided on an “as is” and “as available” basis without warranties of any kind, whether
              express, implied, or statutory, including but not limited to warranties of merchantability, fitness
              for a particular purpose, and non-infringement. We do not warrant that the Site will be uninterrupted,
              secure, or error-free.
            </p>
          </section>

          <section id="limitation-liability">
            <h3 className="text-2xl font-bold text-[#0B1E3F] mb-3">10) Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or
              indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access
              to or use of (or inability to access or use) the Site.
            </p>
          </section>

          <section id="indemnification">
            <h3 className="text-2xl font-bold text-[#0B1E3F] mb-3">11) Indemnification</h3>
            <p>
              You agree to indemnify and hold harmless Nancy Bosibori and our affiliates, partners, and service
              providers from and against any claims, liabilities, damages, losses, and expenses (including reasonable
              legal fees) arising out of or in any way connected with your violation of these Terms or your use of the Site.
            </p>
          </section>

          <section id="termination">
            <h3 className="text-2xl font-bold text-[#0B1E3F] mb-3">12) Termination</h3>
            <p>
              We may suspend or terminate your access to the Site at any time, with or without notice, for conduct
              that we believe violates these Terms or is otherwise harmful to other users, us, or third parties.
            </p>
          </section>

          <section id="governing-law">
            <h3 className="text-2xl font-bold text-[#0B1E3F] mb-3">13) Governing Law & Disputes</h3>
            <p className="mb-2">
              These Terms are governed by the laws of the Republic of Kenya, without regard to its conflict of laws
              principles. You agree that the courts located in Nairobi, Kenya shall have exclusive jurisdiction over
              any dispute arising from or relating to these Terms or the Site.
            </p>
            <p className="text-sm text-gray-600">
              If any provision is found unenforceable, the remaining provisions will remain in effect.
            </p>
          </section>

          <section id="changes">
            <h3 className="text-2xl font-bold text-[#0B1E3F] mb-3">14) Changes to the Terms</h3>
            <p>
              We may update these Terms from time to time. When we do, we will revise the “Last updated” date at the
              top of this page. Your continued use of the Site after changes become effective constitutes acceptance
              of the revised Terms.
            </p>
          </section>

          <section id="contact">
            <h3 className="text-2xl font-bold text-[#0B1E3F] mb-3">15) Contact</h3>
            <p>
              Questions about these Terms? Reach out at{" "}
              <a
                href="mailto:bosborynnc@gmail.com"
                className="underline decoration-[#FFD700] decoration-2 underline-offset-4"
              >
                bosborynnc@gmail.com
              </a>{" "}
              or via the <Link to="/contact" className="underline decoration-[#FFD700] decoration-2 underline-offset-4">Contact</Link> page.
            </p>
          </section>
        </div>

        {/* Back / CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow transition"
          >
            ← Back to Home
          </Link>
          <Link
            to="/privacy"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#FFD700] text-[#0B1E3F] font-semibold hover:bg-[#E6C200] shadow transition"
          >
            View Privacy Policy
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Terms;
