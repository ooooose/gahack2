import React, { ReactNode } from 'react';
import { Center, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <ChakraProvider>
        <Router>{children}</Router>
      </ChakraProvider>
    </>
  );
};

export default AppProvider;
