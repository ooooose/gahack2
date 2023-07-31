import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';


import PicturesPage from '../components/pages/PicturesPage';
import TopPage from '../components/pages/TopPage';

const AppRoutes = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if(!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname])

  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="pictures" element={<PicturesPage />} />
    </Routes>
  )
}

export default AppRoutes;