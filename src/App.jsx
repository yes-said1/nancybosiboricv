import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminDash from './pages/AdminDash';
import RequestAccessForm from './pages/RequestAcessForm';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='contact' element={<Contact />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='admin' element={<AdminDash />} />
        <Route path='request' element={<RequestAccessForm />} />
        {/* Admin Protected Route */}
        {/* <Route
          path="oguang"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
          <Route path="projects" element={<ManageProjects />} />
          <Route path="blogs" element={<ManageBlogs />} />
          <Route path="messages" element={<ContactMessages />} />
          <Route path="manrequests" element={<ManageRequests />} />
        </Route> */}
      </Route>
    </Routes>
  );
};

export default App;
