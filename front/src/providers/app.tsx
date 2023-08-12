import React, { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
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
      <RecoilRoot>
        <ChakraProvider>
          <Router>
            <Sidebar />
            <Center h={'500px'}>{children}</Center>
            <Footer />
          </Router>
        </ChakraProvider>
      </RecoilRoot>
    </>
  );
};

export default AppProvider;
