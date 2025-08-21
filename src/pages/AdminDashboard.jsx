import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { CheckCircle, Mail, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [messages, setMessages] = useState([]);
  const [stats, setStats] = useState({ requests: 0, approved: 0, messages: 0 });
  const [admin, setAdmin] = useState(null);
  const [dateTime, setDateTime] = useState(new Date());

  // Fetch admin profile
  const fetchAdminProfile = async () => {
    try {
      const res = await axiosInstance.get("/api/admin/profile");
      setAdmin(res.data);
    } catch (error) {
      console.error("Error fetching admin profile:", error);
    }
  };

  // Fetch requests
  const fetchRequests = async () => {
    try {
      const res = await axiosInstance.get("/api/request-access/all");
      setRequests(res.data);
      setStats((prev) => ({
        ...prev,
        requests: res.data.length,
        approved: res.data.filter((r) => r.approved).length,
      }));
    } catch (error) {
      console.error("Error fetching requests", error);
    }
  };

  // Fetch messages
  const fetchMessages = async () => {
    try {
      const res = await axiosInstance.get("/api/contacts");
      setMessages(res.data);
      setStats((prev) => ({ ...prev, messages: res.data.length }));
    } catch (error) {
      console.error("Error fetching messages", error);
    }
  };

  useEffect(() => {
    fetchAdminProfile();
    fetchRequests();
    fetchMessages();

    // Update date & time every second
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Approve request
  const approveRequest = async (id) => {
    try {
      await axiosInstance.put(`/api/request-access/approve/${id}`);
      fetchRequests();
    } catch (error) {
      console.error("Approval error:", error);
    }
  };
//logout
  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await axiosInstance.post("/api/admin/logout");
    navigate("/login"); // redirect to login page
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Dashboard Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome{admin ? `, ${admin.name}` : ""} 🎉
        </h1>
        <p className="text-gray-600 mt-2 md:mt-0">
          {dateTime.toLocaleDateString()} • {dateTime.toLocaleTimeString()}
        </p>
        <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
    >
      Logout
    </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Total Requests */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
          <Users className="text-blue-600" size={40} />
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Total Requests</h2>
            <p className="text-2xl font-bold">{stats.requests}</p>
          </div>
        </div>

        {/* Approved */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
          <CheckCircle className="text-green-600" size={40} />
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Approved</h2>
            <p className="text-2xl font-bold">{stats.approved}</p>
          </div>
        </div>

        {/* Messages */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
          <Mail className="text-yellow-500" size={40} />
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Messages</h2>
            <p className="text-2xl font-bold">{stats.messages}</p>
          </div>
        </div>
      </div>

      {/* Requests Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-md rounded-2xl p-6 mb-10"
      >
        <h2 className="text-xl font-semibold mb-4">Pending Requests</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Reason</th>
                <th className="p-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{req.name}</td>
                  <td className="p-3">{req.email}</td>
                  <td className="p-3">{req.reason}</td>
                  <td className="p-3 text-center">
                    {req.approved ? (
                      <span className="text-green-600 font-semibold">Approved</span>
                    ) : (
                      <button
                        onClick={() => approveRequest(req._id)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                      >
                        Approve
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Messages List */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-md rounded-2xl p-6"
      >
        <h2 className="text-xl font-semibold mb-4">Contact Messages</h2>
        <div className="space-y-4 max-h-[400px] overflow-y-auto">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="border border-gray-200 p-4 rounded-xl hover:shadow-md transition"
            >
              <p className="font-semibold text-gray-800">
                {msg.name} ({msg.email})
              </p>
              <p className="text-gray-600">{msg.subject}</p>
              <p className="mt-2 text-gray-700">{msg.message}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
