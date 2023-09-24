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

const SignupForm = () => {
  return (
    <Box
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      mb={4}
      p={8}
    >
      <Stack spacing={2}>
        <FormControl id="name">
          <FormLabel>お名前</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>メールアドレス</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>パスワード</FormLabel>
          <Input type="password" />
        </FormControl>
        <FormControl id="passwordConfimation">
          <FormLabel>パスワード（確認）</FormLabel>
          <Input type="password" />
        </FormControl>
        <Stack>
          <Link to={'/login'}>
            <Text color={'blue'}>ログインページへ</Text>
          </Link>
          <Text fontSize={'14px'} mb={2}>
            プライバシーポリシー及び利用規約に
            <br />
            同意したものとみなします。
          </Text>
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
            新規登録
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SignupForm;
