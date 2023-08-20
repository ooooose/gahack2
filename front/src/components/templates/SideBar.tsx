import React from 'react';

import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';
import SidebarContent from '../organisms/SideBarContent';
import NavBar from '../organisms/NavBar';
import { useAuthUserMutators } from '../../globalStates/atoms/authUserState';
import { useFirebaseAuth } from '../../libs/auth/firebaseAuth';
import { useAuthUserState } from '../../globalStates/atoms/authUserState';

function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const setCurrentUser = useAuthUserMutators();
  const { logout } = useFirebaseAuth(setCurrentUser);
  const currentUser = useAuthUserState();
  return (
    <>
      <Box zIndex={2}>
        <SidebarContent onClose={() => onClose} display={{ base: 'none' }} />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
      </Box>
      {/* navbar */}
      <NavBar
        display={{ base: 'flex' }}
        onOpen={onOpen}
        logout={logout}
        currentUser={currentUser.authUserType}
      />
    </>
  );
}

export default Sidebar;
