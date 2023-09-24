import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const LoginForm = () => {
  return (
    <Box
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      mb={4}
      p={8}
    >
      <Stack spacing={2}>
        <FormControl id="email">
          <FormLabel>メールアドレス</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>パスワード</FormLabel>
          <Input type="password" />
        </FormControl>
        <Stack>
          <Link to={'/signup'}>
            <Text color={'blue'}>サインアップページへ</Text>
          </Link>
          <Text textAlign={'right'} color={'blue.400'}>
            パスワードをお忘れですか?
          </Text>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
          >
            ログイン
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LoginForm;
