import React from "react";

import { Box } from "@chakra-ui/react";
import TopRightMenu from "../organisms/TopRightMenu";
import Logo from "../atoms/Logo";

const Header = () => {
  return (
    <>
      <Box bg='blue.300' w='100%' h='80px' color='white' p={3}>
        <Logo />
        <TopRightMenu />
      </Box>
    </>
  )
}

export default Header;