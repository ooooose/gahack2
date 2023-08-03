import React from "react";

import { Box } from "@chakra-ui/react";

type BoxProps = React.ComponentProps<typeof Box>

const Border = ({ ...props }: BoxProps) => {
  return (
    <Box {...props} >
      <hr />
    </Box>
  )
};

export default Border;