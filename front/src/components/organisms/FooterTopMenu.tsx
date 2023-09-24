import React from 'react';
import { Box } from '@chakra-ui/react';
import Logo from '../atoms/Logo';
import FooterRightSideMenu from '../molecules/FooterRightSideMenu';

const FooterTopMenu = () => {
  return (
    <Box px={6}>
      <Logo />
      <FooterRightSideMenu />
    </Box>
  );
};

export default FooterTopMenu;
