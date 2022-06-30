import React from 'react';
import {
  Flex,
  Text,
  VStack,
  Grid,
  GridItem,
  HStack,
  Image,
  Button,
  Link,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import Logo from '../images/logo.png';
import CoffeCardImage from '../images/CoffeeCard.jpg';
import CoffeeProgImage from '../images/CoffeeProg.avif';
import MakingCoffee from '../images/MakingCoffee.webp';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <VStack spacing={'0'}>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        width={'100%'}
        height={'100vh'}
        bg={'#ededed'}
      >
        <HStack spacing={'40'}>
          <VStack spacing={'1'}>
            <HStack>
              <Image src={Logo} width={'70px'}></Image>
              <Text fontSize={'4xl'}>Welcome</Text>
              <Image src={Logo} width={'70px'}></Image>
            </HStack>
            <Text fontSize={'6xl'}>Enjoy Your Delicious Coffee</Text>
            <Text>
              Boost your productivity and build your mood with a cup of coffee
            </Text>
            <Button
              bg={'black'}
              color={'white'}
              variant={'solid'}
              size={'sm'}
              onClick={() => {
                navigate('/menu');
              }}
            >
              Surf Menu
            </Button>
            <HStack>
              <Text>Can't Decide ?</Text>
              <Link>Use Coffee Roulette</Link>
            </HStack>
          </VStack>

          <HStack>
            <Image
              src={CoffeCardImage}
              height={'40rem'}
              width={'30rem'}
              border={'5px solid white'}
              borderRadius={' 25px 0px 25px  0px'}
              boxShadow={
                'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;'
              }
            ></Image>
          </HStack>
        </HStack>
      </Flex>

      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        bg={'#31363b'}
        height={'110vh'}
        width={'100%'}
      >
        <VStack spacing={'10'}>
          <Text fontSize={'lg'} color={'#484f56'}>
            Enjoy Your Coffee At One of Our Places{' '}
          </Text>
          <HStack spacing={'40'}>
            <Image
              src={CoffeeProgImage}
              height={'40rem'}
              width={'30rem'}
              border={'5px solid white'}
              borderRadius={'0 25px 0px 25px'}
              boxShadow={
                'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;'
              }
            />
            <VStack color={'white'}>
              <Text fontSize={'md'} color={'#c99562'}>
                Our Coffee
              </Text>
              <Text fontSize={'6xl'}>Choose Your Favorite Coffee</Text>
              <Text fontSize={'sm'}>
                We Serve Serval Types of Coffee, Prepared by and Served By Our
                Professionals To Satisfy Your Taste Buds.
              </Text>
              <UnorderedList>
                <HStack spacing={'10'}>
                  <ListItem color={'#c99562'}>
                    <Text fontSize={'2xl'}>Espresso</Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize={'2xl'}>Latte</Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize={'2xl'}>Cappuccino</Text>
                  </ListItem>
                </HStack>
              </UnorderedList>
              <Text
                fontSize={'lg'}
                color={'#c99562'}
                onClick={() => {
                  navigate('/menu');
                }}
              >
                Surf Menu For More
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </Flex>

      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        width={'100%'}
        height={'100vh'}
        bg={'#ededed'}
        p={'20'}
      >
        <VStack spacing={'50'}>
          <HStack>
            <Text fontSize={'2xl'}>Our Story</Text>
            <Text fontSize={'xl'} fontWeight={'extrabold'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              egestas aliquet sem, id fermentum dui auctor ut. Vivamus mi
              tortor, iaculis ac quam ut, porttitor.
            </Text>
          </HStack>
          <HStack>
            <Text fontSize={'xl'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vulputate ac nisi ac porttitor. Nulla congue viverra urna et
              maximus. Sed dignissim fermentum suscipit. Nullam aliquet sapien
              sit amet diam fringilla eleifend. Donec vehicula sem vel
              pellentesque luctus. Proin sollicitudin justo in elementum
              pretium. Maecenas vitae sem et sapien efficitur vehicula. Donec
              commodo massa fringilla, hendrerit libero id, consequat urna. Cras
              iaculis nulla lorem, eu hendrerit elit commodo ac. Vivamus vitae
              nisi vitae neque consequat rutrum nec a metus. Morbi fringilla
              congue risus, sit amet varius ligula dapibus sit amet. Etiam
              imperdiet ornare accumsan. Mauris tincidunt interdum lacinia. In
              elementum imperdiet metus, nec faucibus mi posuere et.
            </Text>
            <Image
              src={MakingCoffee}
              border={'5px solid white'}
              borderRadius={'25px 0px 25px 0px'}
              boxShadow={
                'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;'
              }
            ></Image>
          </HStack>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default Home;
