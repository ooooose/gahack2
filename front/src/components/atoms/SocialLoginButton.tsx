import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Button, Center, Stack, Text } from '@chakra-ui/react';


type SocialLoginButtonProps = {
  onClose: () => void;
};

const SocialLoginButton = ({onClose}: SocialLoginButtonProps) => {
  return (
    <Center p={2}>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
        <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />} onClick={onClose}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
      </Stack>
    </Center>
  );
};

export default SocialLoginButton;
