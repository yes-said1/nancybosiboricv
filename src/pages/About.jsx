import React from "react";
import { Briefcase, Award, Users, Calendar, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B1E3F] to-[#123C69] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Nancy Bosibori</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-200">
          Administration • Operations • Management • Customer Service
        </p>
      </section>

      {/* Professional Summary */}
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0B1E3F] mb-6">Professional Summary</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Nancy Bosibori is a self-assured, mature, and confident administrative, customer service, and
          business administration professional with extensive experience in managing and coordinating
          administrative work. She excels in planning, organizing, and producing results that require
          high levels of discretion and confidentiality. Passionate about providing best-in-class
          service, she communicates and delegates effectively, forecasts accurately, and offers
          strategic leadership.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Over her career, Nancy has successfully transformed organizational processes, improved customer
          satisfaction levels, and supported teams across diverse industries. Her dedication to excellence
          has consistently delivered measurable results.
        </p>
      </section>

      {/* Core Competencies */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-[#0B1E3F] text-center mb-12">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Briefcase, title: "Administration & Operations", desc: "Planning, coordinating, and managing daily operations for maximum efficiency." },
            { icon: Users, title: "Customer Service Leadership", desc: "Delivering top-tier client experiences and ensuring satisfaction." },
            { icon: Calendar, title: "Event Planning & Coordination", desc: "Organizing corporate events, outreach programs, and strategic engagements." },
            { icon: CheckCircle, title: "Policy & Process Improvement", desc: "Reviewing and improving systems, workflows, and operational policies." },
            { icon: Award, title: "Team Training & Mentorship", desc: "Developing and mentoring staff to achieve excellence in service delivery." },
            { icon: Briefcase, title: "Strategic Business Management", desc: "Aligning operational goals with organizational mission and vision." },
          ].map((skill, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-14 h-14 flex items-center justify-center bg-[#FFD700] rounded-xl mb-6">
                <skill.icon size={28} className="text-[#0B1E3F]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0B1E3F]">{skill.title}</h3>
              <p className="text-gray-600">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Career Journey */}
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0B1E3F] mb-12 text-center">Career Journey</h2>
        <div className="space-y-8 border-l-4 border-[#FFD700] pl-6">
          {[
            {
              year: "May 2023 - Present",
              role: "Group Administration Manager",
              company: "Wilken Group",
              desc: "Overseeing operations, managing staff, developing policies, and ensuring smooth administrative processes."
            },
            {
              year: "April 2022 - May 2023",
              role: "Administration Manager",
              company: "Cliff and Company",
              desc: "Led administrative teams, managed resources, and coordinated events to improve operational efficiency."
            },
            {
              year: "Sept 2014 - March 2022",
              role: "Administration & Customer Service Manager",
              company: "Catholic University of Eastern Africa",
              desc: "Handled student admissions, organized recruitment drives, and managed cross-functional teams."
            },
            {
              year: "2008 - 2013",
              role: "Customer Advisor / Direct Sales Officer",
              company: "Barclays Bank of Africa (now ABSA)",
              desc: "Provided financial services, handled customer inquiries, and achieved sales targets."
            },
          ].map((job, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-10 top-1 w-6 h-6 bg-[#FFD700] rounded-full border-4 border-white"></div>
              <h3 className="text-xl font-bold text-[#0B1E3F]">{job.role}</h3>
              <p className="text-sm text-gray-500 mb-1">{job.company} • {job.year}</p>
              <p className="text-gray-700">{job.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#0B1E3F] to-[#123C69] text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Bringing leadership, operational excellence, and strategic vision to your organization.
        </p>
        <Link
          to="/contact"
          className="bg-[#FFD700] text-[#0B1E3F] px-8 py-4 rounded-lg font-bold hover:bg-[#E6C200] transition-all duration-300"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default About;
