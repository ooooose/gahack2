import React from 'react';
import { Box } from '@chakra-ui/react';
import FooterTopMenu from '../organisms/FooterTopMenu';
import Border from '../atoms/Border';
import Text from '../atoms/Text';

const Footer = () => {
  return (
    <>
      <Border color={'black'} />
      <Box w="100%" h="200px" bg={'gray.50'}>
        <Box h={'150px'} p={3} opacity={'0.7'}>
          <FooterTopMenu />
        </Box>
        <Box px={6}>
          <Border color={'black'} />
          <Text fontSize={'18px'} opacity={0.5} ml={6} mt={3}>
            @ All right reserved.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
