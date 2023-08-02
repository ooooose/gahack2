import React from 'react';
import { Box } from '@chakra-ui/react';
import FooterTopMenu from '../organisms/FooterTopMenu';

const Footer = () => {
  return (
    <>
      <Box w="100%" h="250px" bg="gray.100" color="gray">
        <Box h={'150px'} m={3} borderBottom={'1px solid gray'} opacity={'0.7'}>
          <FooterTopMenu />
        </Box>
      </Box>
    </>
  );
};

export default Footer;
