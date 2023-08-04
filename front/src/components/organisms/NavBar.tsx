import React from "react";

import {
  IconButton,
  Box,
  Flex,
  useColorModeValue,
  FlexProps,
} from '@chakra-ui/react';
import {
  FiMenu,
} from 'react-icons/fi';
import Logo from "../atoms/Logo";

interface MobileProps extends FlexProps {
  onOpen: () => void
}
const NavBar = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Box
      px={6}
      height="20"
      width="100%"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      {...rest}>
      <Box position={'fixed'}>
        <Logo />
      </Box>
      <Box position={'fixed'} right={4}>
        <IconButton
          variant="outline"
          onClick={onOpen}
          aria-label="open menu"
          icon={<FiMenu />}
        />
      </Box>
    </Box>
  );
};

export default NavBar;