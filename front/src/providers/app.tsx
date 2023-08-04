import React, { ReactNode } from 'react';
import { Center, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../components/templates/Footer';
import Sidebar from '../components/templates/SideBar';

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <ChakraProvider>
        <Router>
          <Sidebar />
          <Center h={'500px'}>{children}</Center>
          <Footer />
        </Router>
      </ChakraProvider>
    </>
  );
};

export default AppProvider;
