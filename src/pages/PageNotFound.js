import React from 'react';
import { Flex, HStack, Stack, Text, VStack, Image } from '@chakra-ui/react';
import PageNotFoundImage from '../images/coffee_pnf.png';

const PageNotFound = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} height={'100vh'}>
      <HStack spacing={'5'}>
        <VStack>
          <Text fontSize={'9xl'}>404</Text>
          <Text fontSize={'2xl'}>Page not found</Text>
        </VStack>
        <Stack>
          <Image
            src={PageNotFoundImage}
            height={'180px'}
            width={'300px'}
            mt={'65epx'}
          ></Image>
        </Stack>
      </HStack>
    </Flex>
  );
};

export default PageNotFound;
