import React from 'react'

import { ChakraProvider, Center } from '@chakra-ui/react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import Header from './components/templates/Header';
import Footer from './components/templates/Footer';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Center h='500px'>
        <Router>
          <AppRoutes />
        </Router>
      </Center>
      <Footer />
    </ChakraProvider>
  )
}

export default App;
