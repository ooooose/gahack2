import React from 'react';

import { Box } from '@chakra-ui/react';
import TopRightMenu from '../organisms/TopRightMenu';
import Logo from '../atoms/Logo';

const Header = () => {
  return (
    <>
      <Box w="100%" h="80px" p={2} position="sticky" top={0} zIndex="fixed">
        <Box p={3}>
          <Logo />
        </Box>
        <TopRightMenu />
      </Box>
    </>
  );
};

export default Header;
