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
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Logo />
    </Flex>
  );
};

export default NavBar;