import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { useFirebaseAuth } from '../libs/auth/firebaseAuth';
import PicturesPage from '../components/pages/PicturesPage';
import ThemesPage from '../components/pages/ThemesPage';
import TopPage from '../components/pages/TopPage';
import AboutPage from '../components/pages/AboutPage';
import PrivacyPolicy from '../components/pages/PrivacyPolicy';
import TermsOfService from '../components/pages/TermsOfService';
import LoginAuthGuard from './LoginAuthGuard';

const AppRoutes = () => {
  const { hash, pathname } = useLocation();
  const { isLoading } = useFirebaseAuth();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route
            path="/pictures"
            element={<LoginAuthGuard component={<PicturesPage />} />}
          />
          <Route
            path="/themes"
            element={<LoginAuthGuard component={<ThemesPage />} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
