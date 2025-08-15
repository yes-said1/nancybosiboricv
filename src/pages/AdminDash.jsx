import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true; // Send cookies automatically

const AdminDash = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if logged in
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/api/admin/me") // Backend route to check current admin
//       .then((res) => {
//         setAdmin(res.data);
//         setLoading(false);
//       })
//       .catch(() => {
//         navigate("/login");
//       });
//   }, [navigate]);

  const handleLogout = () => {
    axios
      .post("http://localhost:3000/api/admin/logout")
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0B1E3F] text-white p-5">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav className="space-y-4">
          <button className="block w-full text-left hover:bg-[#123C69] p-2 rounded">Dashboard</button>
          <button className="block w-full text-left hover:bg-[#123C69] p-2 rounded">Manage Users</button>
          <button className="block w-full text-left hover:bg-[#123C69] p-2 rounded">Settings</button>
        </nav>
        <button
          onClick={handleLogout}
          className="mt-8 bg-red-500 hover:bg-red-600 px-4 py-2 rounded w-full"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome, {admin?.name || "Admin"} 👋</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold">Total Users</h2>
            <p className="text-3xl font-bold mt-2">125</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold">Projects</h2>
            <p className="text-3xl font-bold mt-2">45</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold">Pending Tasks</h2>
            <p className="text-3xl font-bold mt-2">8</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDash;
