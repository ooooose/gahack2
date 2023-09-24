import React from "react";
import {
  Flex,
  Stack,
  Heading,
} from '@chakra-ui/react'
import SignupForm from "../molecules/SignupForm";


function SignupPage() {
  return (
    <Flex
      align={'center'}
      justify={'center'}>
      <Stack spacing={4} mx={'auto'} w={'md'} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>サインアップ</Heading>
        </Stack>
        <SignupForm />
      </Stack>
    </Flex>
  )
}

export default SignupPage;