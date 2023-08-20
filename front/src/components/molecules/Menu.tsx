import React from 'react';
import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Menu as ChakraMenu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';
import Avatar from '../atoms/Avatar';
import { AuthUser } from '../../types/users';
import { useNavigate } from 'react-router-dom';

type currentUserProps = {
  currentUser: AuthUser | null;
  logout: () => Promise<void>;
};

const Menu = ({ currentUser, logout }: currentUserProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Flex alignItems={'center'}>
        <ChakraMenu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: 'none' }}
          >
            <HStack>
              <Avatar avatar={currentUser?.avatar} />
              <Box display={{ base: 'none', md: 'flex' }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList
            zIndex={20}
            bg={useColorModeValue('white', 'gray.900')}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
          >
            <MenuItem
              onClick={() => {
                logout();
                console.log('logout!');
                navigate('/');
              }}
            >
              ログアウト
            </MenuItem>
          </MenuList>
        </ChakraMenu>
      </Flex>
    </>
  );
};

export default Menu;
