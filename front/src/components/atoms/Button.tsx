import React, { forwardRef } from 'react'
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  useBreakpointValue
} from '@chakra-ui/react'

export type ButtonProps = {
  children: string | React.ReactNode 
  sizes?: string | { base: string; md: string } | { base: string; xl: string }
}

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps & ChakraButtonProps
>(({ children, sizes, ...props }, ref) => {
  const adjustment = typeof sizes === 'object' ? sizes : [sizes]
  const buttonSize = useBreakpointValue(adjustment, 'md')

  return (
    <ChakraButton size={buttonSize} ref={ref} {...props}>
      {children}
    </ChakraButton>
  )
});