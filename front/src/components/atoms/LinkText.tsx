import React, { memo } from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

type LinkProps = React.ComponentProps<typeof ChakraLink> &
  React.ComponentProps<typeof RouterLink>;

const LinkText = memo(({ children, ...props }: LinkProps) => {
  return (
    <ChakraLink as={RouterLink} {...props} _hover={{ textDecoration: 'none' }}>
      {children}
    </ChakraLink>
  );
});

LinkText.displayName = 'LinkText';
export default LinkText;
