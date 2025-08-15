import React, { useState } from "react";
import { Mail, Lock, Loader2 } from "lucide-react";
import axiosInstance from "../utils/axiosInstance"; // shared axios instance
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate(); // navigation hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const res = await axiosInstance.post("/api/admin/login", formData);
      localStorage.setItem("token", res.data.token); // store JWT token
      setMessage({ type: "success", text: res.data.message || "Login successful!" });

      // Wait 1.5s to show success message before redirect
      setTimeout(() => {
        navigate("/admin");
      }, 1500);
    } catch (err) {
      setMessage({ type: "error", text: err.response?.data?.message || "Login failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#0B1E3F] to-[#123C69] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-[#0B1E3F] mb-6">
          Welcome Back
        </h2>

        {/* Feedback Message */}
        {message.text && (
          <p
            className={`text-center mb-4 font-semibold ${
              message.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message.text}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="flex items-center border border-gray-300 rounded-lg px-4">
            <Mail className="text-gray-400 mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full py-3 outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border border-gray-300 rounded-lg px-4">
            <Lock className="text-gray-400 mr-3" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full py-3 outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center bg-[#FFD700] text-[#0B1E3F] font-bold py-3 rounded-lg transition-colors ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#E6C200]"
            }`}
          >
            {loading && <Loader2 className="animate-spin mr-2" />}
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-[#0B1E3F] font-semibold hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
