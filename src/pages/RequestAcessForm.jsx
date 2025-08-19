import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';

const RequestAccessForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', reason: '' });
  const [status, setStatus] = useState('');
  const [approved, setApproved] = useState(false);
  const [requestId, setRequestId] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const res = await axiosInstance.post('/api/request-access', formData);

      if (res.data.success) {
        setStatus('Request submitted! Wait for approval.');
        setRequestId(res.data.requestId); // Store the request ID
      } else {
        setStatus('Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error submitting request.');
    }
  };

  useEffect(() => {
    let interval;
    if (requestId) {
      interval = setInterval(async () => {
        try {
          const res = await axiosInstance.get(`/api/request-access/status/${requestId}`);
          if (res.data.approved) {
            setApproved(true);
            setStatus('Request approved! You can now download the CV.');
            clearInterval(interval);
          }
        } catch (error) {
          console.error(error);
        }
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [requestId]);

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg border">
      <h2 className="text-2xl font-semibold mb-4 text-center">Request Access to CV</h2>

      {!approved && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
          <textarea
            name="reason"
            placeholder="Reason for Request"
            value={formData.reason}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border rounded-lg"
          ></textarea>
          <button type="submit" className="w-full bg-yellow-400 text-white py-2 rounded-lg">
            Submit Request
          </button>
        </form>
      )}

{status && (
  <p
    className={`text-center mt-4 transition-all duration-500 ${
      status.includes('submitted')
        ? 'text-green-600 font-semibold animate-pulse'
        : status.includes('approved')
        ? 'text-green-700 font-bold animate-bounce'
        : 'text-red-600'
    }`}
  >
    {status}
  </p>
)}

      {approved && (
        <div className="mt-6 text-center">
          <a
            href="https://drive.google.com/file/d/1pB2iN1whvEYZ9vHjgzhe_QIDfLuW16KO"
            className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      )}
    </div>
  );
};

export default RequestAccessForm;
