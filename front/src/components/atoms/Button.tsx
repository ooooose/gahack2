import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

type ButtonProps = React.ComponentProps<typeof ChakraButton>;


const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <>
      <ChakraButton {...props}>{children}</ChakraButton>
    </>
  )
}

export default Button;