import React from "react"
import { Link as ChakraLink } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

type LinkProps = React.ComponentProps<typeof ChakraLink> & React.ComponentProps<typeof RouterLink>

const LinkText = ({ children, ...props }: LinkProps) => {
  return (
    <ChakraLink as={RouterLink} {...props}>
      {children}
    </ChakraLink>
  )
}

export default LinkText;