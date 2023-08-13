import React from 'react';
import { Center } from '@chakra-ui/react';
import { useAuthUserState } from '../../globalStates/atoms/authUserState';

function AboutPage() {
  const currentUser = useAuthUserState();
  console.log(currentUser);
  return (
    <>
      <Center>
        <h1>Hello!(作成中)</h1>
      </Center>
    </>
  );
}

export default AboutPage;
