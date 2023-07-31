import React from "react";
import { Box } from "@chakra-ui/react";
import Avatar from "../atoms/Avatar";
import Menu from "../atoms/Menu";

const TopRightMenu = () => {
  return (
    <>
      <Box display={"flex"} float={"right"} marginRight={2}>
        <Avatar />
        <Menu />
      </Box>   
    </>
  )
}

export default TopRightMenu;