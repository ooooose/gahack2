import React from 'react';

import { Text as ChakraText } from '@chakra-ui/react';

type TextProps = React.ComponentProps<typeof ChakraText>;

const Text = ({ children, ...props }: TextProps) => {
  return (
    <>
      <ChakraText {...props}>{children}</ChakraText>
    </>
  );
};

export default Text;
