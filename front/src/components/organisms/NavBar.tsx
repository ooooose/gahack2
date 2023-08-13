import React from 'react';

import {
  IconButton,
  Box,
  useColorModeValue,
  FlexProps,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import Logo from '../atoms/Logo';
import Menu from '../molecules/Menu';
import { useAuthUserMutators } from '../../globalStates/atoms/authUserState';
import { useFirebaseAuth } from '../../libs/auth/firebaseAuth';

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const NavBar = ({ onOpen, ...rest }: MobileProps) => {
  const setCurrentUser = useAuthUserMutators();
  const { currentUser, logout } = useFirebaseAuth(setCurrentUser);
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
      <Box position={'fixed'} zIndex={10} display={'flex'}>
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
      <Box position={'fixed'} zIndex={10} right={6}>
        <Menu currentUser={currentUser.authUserType} logout={logout} />
      </Box>
    </Box>
  );
};

export default NavBar;
