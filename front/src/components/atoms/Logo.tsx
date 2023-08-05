import React from 'react';

import { Link } from 'react-router-dom';
import { Heading, Box } from '@chakra-ui/react';

const Logo = () => {
  return (
    <>
      <Box p={2} float="left">
        {/* <Image src="" /> */}
        <Link className="App-link" to="/">
          <Heading as="h2" size="2xl">
            画HACK
          </Heading>
        </Link>
      </Box>
    </>
  );
};

export default Logo;
