import React from "react";
import { ArrowRight, Quote, Star, Briefcase, Users, Calendar, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0B1E3F] to-[#123C69] text-white py-32 px-6 md:px-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gray-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Nancy Bosibori
            </h1>
            <p className="text-xl md:text-2xl text-yellow-300 mb-6">
              Administration • Operations • Management • Customer Service
            </p>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              A self-assured, results-driven professional with a proven track record in administration, operations management, event planning, customer service, and strategic leadership — delivering excellence and operational efficiency in high-demand environments.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6">
              <Link
                to="/portfolio"
                className="group bg-yellow-400 text-[#0B1E3F] px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 font-semibold"
              >
                View Achievements
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/request"
                className="group border border-yellow-400 text-yellow-400 px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 font-semibold"
              >
                View CV
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1E3F] mb-4">
            Areas of Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bringing leadership, precision, and strategic thinking to drive organizational success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Briefcase, title: "Administration & Operations", desc: "Planning, organizing, and managing day-to-day administrative processes with efficiency." },
            { icon: Users, title: "Customer Service Leadership", desc: "Delivering best-in-class service to exceed expectations for clients and stakeholders." },
            { icon: Calendar, title: "Event Planning & Coordination", desc: "Organizing corporate functions, conferences, and outreach programs with precision." },
            { icon: ClipboardList, title: "Policy & Process Management", desc: "Designing, reviewing, and improving systems, policies, and workflows." },
          ].map((skill, i) => (
            <div key={i} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center mb-6">
                <skill.icon size={28} className="text-[#0B1E3F]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0B1E3F]">{skill.title}</h3>
              <p className="text-gray-600">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-yellow-50 to-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1E3F] mb-4">
            Professional Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Words from colleagues, supervisors, and partners.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { text: "Nancy consistently demonstrates exceptional organizational skills and leadership, ensuring operational success.", name: "Mr. Mike Mutua", role: "CEO, Westwind Aviation" },
            { text: "Her professionalism, discretion, and problem-solving skills make her a valuable asset to any organization.", name: "Joshua Obero", role: "Business Development Manager, Jaguar Petroleum" },
            { text: "Nancy’s dedication to customer satisfaction and administrative excellence is unmatched.", name: "Japheth Kiprotich Ngeno", role: "Communications & Commercial Manager, Aberdair Aviation" }
          ].map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-transform duration-300">
              <div className="absolute w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center -mt-4 -ml-4">
                <Quote size={16} className="text-[#0B1E3F]" />
              </div>
              <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
              <h4 className="font-semibold text-[#0B1E3F]">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              <div className="mt-2 flex justify-center">
                <Star size={16} className="text-yellow-500 fill-current" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#0B1E3F] to-[#123C69] text-white py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Collaborate?</h2>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          Let’s bring efficiency, strategy, and excellence to your organization through proven leadership and administrative expertise.
        </p>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-3 bg-yellow-400 text-[#0B1E3F] px-10 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 font-bold text-lg"
        >
          Get in Touch
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </div>
  );
};

export default Home;
