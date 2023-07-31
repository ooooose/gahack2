import React from 'react'

import { ChakraProvider } from '@chakra-ui/react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ChakraProvider>
  )
}

export default App;
