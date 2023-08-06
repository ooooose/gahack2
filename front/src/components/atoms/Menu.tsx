import React from 'react';
import { Box } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

const Menu = () => {
  return (
    <>
      <Box p={4}>
        <AiOutlineMenu size={'26px'} cursor={'pointer'} />
      </Box>
    </>
  );
};

export default Menu;
