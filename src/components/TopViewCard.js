import React from 'react';
import { Flex, HStack, VStack, Text, Image, Box } from '@chakra-ui/react';
import DrinkImage from '../images/Espresso.png';
const TopViewCard = () => {
  return (
    <Flex
      bg={'blackAlpha.200'}
      borderRadius={'25px'}
      width={'400px'}
      boxShadow="dark-lg"
    >
      <Box>
        <Image src={DrinkImage} width={'300px'} height={'300px'}></Image>
      </Box>
    </Flex>
  );
};

export default TopViewCard;
