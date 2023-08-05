import React from 'react';

import { Link } from 'react-router-dom';
import { Heading, Box } from '@chakra-ui/react';

type LinkProps = React.ComponentProps<typeof Heading> 

const Logo = ({ ...props }: LinkProps) => {
  return (
    <>
      <Box p={2} float="left">
        {/* <Image src="" /> */}
        <Link className="App-link" to="/">
          <Heading {...props}>
            画HACK
          </Heading>
        </Link>
      </Box>
    </>
  );
};

export default Logo;
