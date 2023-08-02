import React from 'react';
import { Center } from '@chakra-ui/react';
import Header from '../templates/Header';
import Footer from '../templates/Footer';

function TopPage() {
  return (
    <>
      <Header />
      <Center h={'500px'}>
        <h1>Hello! Gahack</h1>
      </Center>
      <Footer />
    </>
  );
}

export default TopPage;
