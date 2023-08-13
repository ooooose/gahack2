import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Button, Center, Stack, Text } from '@chakra-ui/react';
import { loginWithGoogle } from '../../libs/auth/auth';
import { useLocation, useNavigate } from 'react-router-dom';

type SocialLoginButtonProps = {
  onClose: () => void;
};

const SocialLoginButton = ({onClose}: SocialLoginButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPathName = location.pathname + location.search;
  return (
    <Center p={2}>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
        <Button 
          w={'full'} 
          variant={'outline'} 
          leftIcon={<FcGoogle />} 
          onClick={() => {
            onClose();
            loginWithGoogle(navigate, fromPathName);
          }}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
      </Stack>
    </Center>
  );
};

export default SocialLoginButton;
