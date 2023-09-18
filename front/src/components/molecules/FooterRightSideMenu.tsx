import React from 'react';
import { Box } from '@chakra-ui/react';

import LinkText from '../atoms/LinkText';

const FooterRightSideMenu = () => {
  return (
    <>
      <Box float={'right'} display={'flex'}>
        <Box p={3}>
          <LinkText to={'/about'}>画HACA2とは</LinkText>
        </Box>
        <Box p={3}>
          <LinkText to={'/terms-of-service'}>利用規約</LinkText>
        </Box>
        <Box p={3}>
          <LinkText to={'/privacy-policy'}>プライバシーポリシー</LinkText>
        </Box>
      </Box>
    </>
  );
};

export default FooterRightSideMenu;