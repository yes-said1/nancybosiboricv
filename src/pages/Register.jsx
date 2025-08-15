import React, { useState } from "react";
import { User, Mail, Lock, CheckCircle, XCircle, Loader2 } from "lucide-react";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(""); // NEW
  const navigate = useNavigate();

  // Password strength checker function
  const checkPasswordStrength = (password) => {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) return "Weak";
    if (strength === 3 || strength === 4) return "Medium";
    if (strength === 5) return "Strong";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      setPasswordStrength(checkPasswordStrength(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // Enforce strong password only
    if (passwordStrength !== "Strong") {
      setErrorMessage("Password must be Strong (uppercase, lowercase, number, special character, and at least 8 characters).");
      return;
    }

    setLoading(true);
    try {
      const res = await axiosInstance.post("/api/admin/register", formData);
      setSuccessMessage(res.data.message || "Registration successful!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setErrorMessage(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  // Function to determine color based on strength
  const getStrengthColor = () => {
    if (passwordStrength === "Weak") return "text-red-500";
    if (passwordStrength === "Medium") return "text-yellow-500";
    if (passwordStrength === "Strong") return "text-green-500";
    return "text-gray-500";
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#0B1E3F] to-[#123C69] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full relative">
        {/* Success message */}
        {successMessage && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg flex items-center space-x-2 animate-fadeInScale">
            <CheckCircle className="text-green-500" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Error message */}
        {errorMessage && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg flex items-center space-x-2 animate-fadeInScale">
            <XCircle className="text-red-500" />
            <span>{errorMessage}</span>
          </div>
        )}

        <h2 className="text-3xl font-bold text-center text-[#0B1E3F] mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="flex items-center border border-gray-300 rounded-lg px-4">
            <User className="text-gray-400 mr-3" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full py-3 outline-none"
            />
          </div>

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
          <div>
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
            {formData.password && (
              <p className={`mt-1 text-sm font-semibold ${getStrengthColor()}`}>
                Strength: {passwordStrength}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center bg-[#FFD700] text-[#0B1E3F] font-bold py-3 rounded-lg hover:bg-[#E6C200] transition-colors disabled:opacity-70`}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />
                Registering...
              </>
            ) : (
              "Register"
            )}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-[#0B1E3F] font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes fadeInScale {
            0% { opacity: 0; transform: scale(0.9) translateX(-50%); }
            100% { opacity: 1; transform: scale(1) translateX(-50%); }
          }
          .animate-fadeInScale {
            animation: fadeInScale 0.4s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Register;
