import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Button, Center, Stack, Text } from '@chakra-ui/react';
import { loginWithGoogle } from '../../libs/auth/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthUserMutators } from '../../globalStates/atoms/authUserState';

type SocialLoginButtonProps = {
  onClose: () => void;
};

const SocialLoginButton = ({ onClose }: SocialLoginButtonProps) => {
  const navigate = useNavigate();
  const setCurrentUser = useAuthUserMutators();
  return (
    <Center p={2}>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
        <Button
          w={'full'}
          variant={'outline'}
          leftIcon={<FcGoogle />}
          onClick={() => {
            loginWithGoogle(navigate, setCurrentUser);
            onClose();
          }}
        >
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
      </Stack>
    </Center>
  );
};

export default SocialLoginButton;
