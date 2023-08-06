import React from 'react';

import {
  IconButton,
  Box,
  useColorModeValue,
  FlexProps,
  Flex,
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
      mx={6}
      px={6}
      height="20"
      width="100%"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      {...rest}
    >
      <Box position={'fixed'}>
        <Logo />
      </Box>
      <Box textAlign={'right'}></Box>
      <Box position={'fixed'} right={6}>
        <Flex gap={5}>
          <Avatar />
          <IconButton
            variant="outline"
            onClick={onOpen}
            aria-label="open menu"
            icon={<FiMenu />}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default NavBar;
