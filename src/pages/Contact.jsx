import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import axiosInstance from "../utils/axiosInstance"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    try {
      const res = await axiosInstance.post("/contacts/create", formData);

      setFeedback(res.data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setFeedback(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B1E3F] to-[#123C69] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-200">
          I’d love to hear from you! Let’s discuss how I can bring value to your organization.
        </p>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-[#0B1E3F] mb-6">Contact Information</h2>
          <p className="text-lg text-gray-700 mb-8">
            Reach out via phone, email, or the contact form. I’ll respond as soon as possible.
          </p>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#FFD700] flex items-center justify-center rounded-xl mr-4">
                <Phone size={22} className="text-[#0B1E3F]" />
              </div>
              <span className="text-gray-700">+254 724 237 710</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#FFD700] flex items-center justify-center rounded-xl mr-4">
                <Mail size={22} className="text-[#0B1E3F]" />
              </div>
              <span className="text-gray-700">bosborynnc@gmail.com</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#FFD700] flex items-center justify-center rounded-xl mr-4">
                <MapPin size={22} className="text-[#0B1E3F]" />
              </div>
              <span className="text-gray-700">Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-[#0B1E3F] mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#FFD700] text-[#0B1E3F] px-6 py-3 rounded-lg font-bold hover:bg-[#E6C200] transition-all duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Feedback message */}
          {feedback && (
            <p className="mt-4 text-center text-gray-700 font-medium">{feedback}</p>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="h-80">
        <iframe
          title="Nancy Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.014508657063!2d36.81667!3d-1.28333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d4f4dbed01%3A0x9d4e18a65a603b56!2sNairobi!5e0!3m2!1sen!2ske!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
