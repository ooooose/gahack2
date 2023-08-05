import React from 'react';

import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  BoxProps,
} from '@chakra-ui/react';
import { FiHome, FiTrendingUp, FiHeart, FiUser } from 'react-icons/fi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { IconType } from 'react-icons';
import NavItem from '../molecules/NavItem';

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Trending', icon: FiTrendingUp, href: '/pictures'},
  { name: 'Home', icon: FiHome, href: '/' },
  { name: 'Profile', icon: FiUser, href: '/users' },
  { name: 'Drawing', icon: IoColorPaletteOutline, href: '/pictures/new'},
  { name: 'Favourites', icon: FiHeart, href: '/likes' },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 'full' }}
      pos="fixed"
      h="full"
      zIndex={10}
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          画HACK
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} href={link.href} icon={link.icon} onClose={onClose}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

export default SidebarContent;
