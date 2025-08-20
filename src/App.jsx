import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminDash from './pages/AdminDashboard';
import RequestAccessForm from './pages/RequestAcessForm';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';

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
        <Route path='xt1' element={<AdminDash />} />
        <Route path='request' element={<RequestAccessForm />} />
        <Route path='terms' element={<Terms />} />
        <Route path='privacy' element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
};

export default App;
