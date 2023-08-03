import React from 'react';

import {
  Box,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react'
import SidebarContent from '../organisms/SideBarContent';
import NavBar from '../organisms/NavBar';

function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
      <NavBar display={{ base: 'flex'}} onOpen={onOpen} /> 
    </>
  )
}

export default Sidebar;