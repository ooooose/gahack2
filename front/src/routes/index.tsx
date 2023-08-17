import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { useFirebaseAuth } from '../libs/auth/firebaseAuth';
import PicturesPage from '../components/pages/PicturesPage';
import TopPage from '../components/pages/TopPage';
import AboutPage from '../components/pages/AboutPage';
import PrivacyPolicy from '../components/pages/PrivacyPolicy';
import TermsOfService from '../components/pages/TermsOfService';
import { useAuthUserMutators } from '../globalStates/atoms/authUserState';

const AppRoutes = () => {
  const { hash, pathname } = useLocation();
  const setCurrentUser = useAuthUserMutators();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isLoading } = useFirebaseAuth(setCurrentUser);
  console.log(isLoading);
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <>
      {isLoading ? (
        <p>...loading</p>
      ) : (
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/pictures" element={<PicturesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
