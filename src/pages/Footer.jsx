import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <footer className="bg-[#0B1E3F] text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Bio Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-[#FFD700]">Nancy Bosibori</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Administration, Operations, Management & Customer Service professional with extensive experience in
              organizational leadership, process improvement, and client relations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#FFD700] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFD700]">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="/portfolio" className="text-gray-300 hover:text-white">Achievements</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Services & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFD700]">Core Services</h4>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-300">Administration & Operations</li>
              <li className="text-gray-300">Customer Service Leadership</li>
              <li className="text-gray-300">Policy & Process Improvement</li>
              <li className="text-gray-300">Event Planning & Coordination</li>
              <li className="text-gray-300">Team Training & Mentorship</li>
            </ul>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">bosborynnc@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+254 724 237 710</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Wilken House, Nairobi Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div>
              <h5 className="text-lg font-semibold mb-2">Let’s Work Together</h5>
              <p className="text-gray-300">Bringing leadership and operational excellence to your organization.</p>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-4">
              <Link 
                to={"/contact"}
                className="bg-[#FFD700] text-[#0B1E3F] hover:bg-[#E6C200] px-6 py-2 rounded-lg transition-colors flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Link>
              <Link 
                to={'/request'}
                className="border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#0B1E3F] px-6 py-2 rounded-lg transition-colors flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Link> 
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Nancy Bosibori. All rights reserved.
            </p>
            <div className="mt-2 sm:mt-0 flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
              <div className="flex items-center text-gray-400">
                <span>Built with</span>
                <span className="text-yellow-500 mx-1">♥</span>
                <span>by Said.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
