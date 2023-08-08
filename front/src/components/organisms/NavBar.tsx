import React from 'react';

import {
  IconButton,
  Box,
  useColorModeValue,
  FlexProps,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import Logo from '../atoms/Logo';
import Avatar from '../atoms/Avatar';

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const NavBar = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Box
      mt={2}
      mx={2}
      px={6}
      height="20"
      width="100%"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      {...rest}
    >
      <Box position={'fixed'} display={'flex'}>
        <IconButton
          mt={2}
          mr={2}
          variant="outline"
          onClick={onOpen}
          aria-label="open menu"
          icon={<FiMenu />}
        />
        <Logo />
      </Box>
      <Box position={'fixed'} right={6}>
        <Avatar />
      </Box>
    </Box>
  );
};

export default NavBar;
