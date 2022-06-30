import React from 'react';
import { VStack, HStack, Flex, Text, Image } from '@chakra-ui/react';
import aboutLogo from '../images/About.svg';

const About = () => {
  return (
    <VStack spacing={'0'}>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        width={'100%'}
        height={'100vh'}
        bg={'#ededed'}
      >
        <VStack>
          <Text fontSize={'6xl'}>About Us</Text>
          <HStack spacing={'3'} p={20}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              non ex vel velit hendrerit gravida nec sodales nulla. Nunc a justo
              diam. Aliquam cursus lobortis nulla, at rhoncus ante gravida in.
              Aliquam vitae lobortis erat. Aenean scelerisque id elit a aliquet.
              Sed aliquet consectetur tellus, a tempor enim commodo in. Nullam a
              tempus tortor. Ut sed aliquam eros, eu porta mauris. Ut imperdiet,
              nisl ac volutpat malesuada, ipsum justo euismod ipsum, ut
              tincidunt nulla lacus tempus dolor. Nam at malesuada diam. Proin
              vel fermentum dui. Nulla vel arcu vestibulum, commodo nunc sed,
              venenatis leo. Integer eget nisl ut nisi convallis.
            </Text>
            <Image src={aboutLogo} height={'400px'}></Image>
          </HStack>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default About;
