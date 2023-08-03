import React from 'react';
import { Center, Box, useColorModeValue} from '@chakra-ui/react';
import Footer from '../templates/Footer';
import Sidebar from '../templates/SideBar';

function TopPage() {
  return (
    <>
      <Box bg={useColorModeValue('white', 'gray.900')}>
        <Sidebar />
        <Center h={'500px'}>
          <h1>Hello! Gahack</h1>
        </Center>
        <Footer />
      </Box>
    </>
  );
}

export default TopPage;
