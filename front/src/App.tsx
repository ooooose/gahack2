import React from 'react'

import { ChakraProvider } from '@chakra-ui/react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import Header from './components/templates/Header';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Router>
        <AppRoutes />
      </Router>
    </ChakraProvider>
  )
}

export default App;
