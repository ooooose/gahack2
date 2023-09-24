import React from 'react';
import { Flex, Stack, Heading } from '@chakra-ui/react';
import LoginForm from '../molecules/LoginForm';

function LoginPage() {
  return (
    <Flex align={'center'} justify={'center'}>
      <Stack spacing={4} mx={'auto'} w={'md'} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>ログイン</Heading>
        </Stack>
        <LoginForm />
      </Stack>
    </Flex>
  );
}

export default LoginPage;
