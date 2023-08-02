import React from 'react';
import { Box } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

// サイドメニューの開閉（openSidebar, setOpenSidebarをグローバルで管理）
// memo化もする！
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
