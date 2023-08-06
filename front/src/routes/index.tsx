import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import PicturesPage from '../components/pages/PicturesPage';
import TopPage from '../components/pages/TopPage';
import AboutPage from '../components/pages/AboutPage';
import PrivacyPolicy from '../components/pages/PrivacyPolicy';
import TermsOfService from '../components/pages/TermsOfService';

const AppRoutes = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/pictures" element={<PicturesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default AppRoutes;
