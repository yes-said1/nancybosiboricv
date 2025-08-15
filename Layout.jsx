import React, { useState } from 'react';
import Header from './src/pages/Header';
import Footer from './src/pages/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname.slice(1) || 'home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
    window.location.href = `/${page === 'home' ? '' : page}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;