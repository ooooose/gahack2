import React from "react";
import { Box } from "@chakra-ui/react";
import Logo from "../atoms/Logo";

const Footer = () => {
  return (
    <>
      <Box w="100%" h='300px' bg='gray.100' color='gray'>
        <Box p={6}>
          <Logo />
        </Box>
      </Box>
    </>
  )
}

export default Footer;