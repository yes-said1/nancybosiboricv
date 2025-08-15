import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
// import AdminDashboard from './pages/AdminDashboard';
// import ManageProjects from './pages/ManageProjects';
// import ManageBlogs from './pages/ManageBlogs';
// import ContactMessages from './pages/ContactMessages';
// import ProtectedRoute from './components/ProtectedRoute'; // Make sure path is correct
// import Terms from './pages/Terms';
// import Privacy from './pages/Privacy';
// import RequestAccessForm from './pages/RequestAccessForm';
// import ManageRequests from './pages/ManageRequests';
// import ForgotPassword from './pages/ForgotPassword';
// import ResetPassword from './pages/ResetPassword';

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
        {/* <Route path="about" element={<AboutUs />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="request" element={<RequestAccessForm />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} /> */}

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
