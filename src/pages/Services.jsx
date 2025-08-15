import React from "react";
import { Briefcase, Users, Calendar, ClipboardList, CheckCircle, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B1E3F] to-[#123C69] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Services</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-200">
          Delivering excellence in Administration, Operations, Customer Service, and Strategic Management.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0B1E3F] text-center mb-12">What I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Briefcase,
              title: "Administration & Operations",
              desc: "Efficient planning, organizing, and supervising daily operations to enhance productivity."
            },
            {
              icon: Users,
              title: "Customer Service Leadership",
              desc: "Managing client relationships with professionalism and ensuring high satisfaction levels."
            },
            {
              icon: Calendar,
              title: "Event Planning & Coordination",
              desc: "Organizing and managing corporate events, recruitment drives, and outreach programs."
            },
            {
              icon: ClipboardList,
              title: "Policy & Process Improvement",
              desc: "Reviewing, refining, and implementing operational policies for optimal performance."
            },
            {
              icon: Award,
              title: "Training & Mentorship",
              desc: "Guiding and empowering staff through skill-building programs and mentorship."
            },
            {
              icon: CheckCircle,
              title: "Strategic Business Management",
              desc: "Aligning operational strategies with company goals to achieve measurable results."
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#FFD700] rounded-xl mb-6">
                <service.icon size={28} className="text-[#0B1E3F]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1E3F] mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-[#0B1E3F] text-center mb-12">Why Work With Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {[
            {
              title: "Proven Track Record",
              desc: "Years of experience delivering measurable results in administration and operations."
            },
            {
              title: "Client-Centered Approach",
              desc: "Tailored solutions focused on exceeding client expectations."
            },
            {
              title: "Strategic Vision",
              desc: "Combining operational efficiency with long-term business growth strategies."
            }
          ].map((reason, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-bold text-[#0B1E3F] mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#0B1E3F] to-[#123C69] text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Get in touch today and let’s discuss how I can bring operational excellence to your organization.
        </p>
        <Link
          to="/contact"
          className="bg-[#FFD700] text-[#0B1E3F] px-8 py-4 rounded-lg font-bold hover:bg-[#E6C200] transition-all duration-300"
        >
          Contact Me
        </Link>
      </section>
    </div>
  );
};

export default Services;
