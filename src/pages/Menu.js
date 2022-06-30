import React, { useState } from 'react';
import { VStack, Flex, HStack, Text } from '@chakra-ui/react';
import ItemCard from '../components/ItemCard';

import espresso from '../images/Espresso.jpg';
import latte from '../images/Latte.jpg';
import cap from '../images/Cap.jpg';

import coldbrew from '../images/ColdBrew.jpg';
import icedlatte from '../images/IcedLatte.jpg';
import icedcap from '../images/IcedCap.jpg';

import croissant from '../images/Croissant.jpg';
import waffle from '../images/Waffle.jpg';
import macaron from '../images/Macaron.jpg';

const Menu = () => {
  return (
    <VStack spacing={'0'}>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        width={'100%'}
        bg={'#ededed'}
      >
        <VStack>
          <Text fontSize={'6xl'}>Menu</Text>
          <Text>Hot Drinks</Text>
          <HStack>
            <ItemCard name="espresso" image={espresso} />
            <ItemCard name="latte" image={latte} />
            <ItemCard name="cappuccino" image={cap} />
          </HStack>
          <Text>Cold Drinks</Text>
          <HStack>
            <ItemCard name="cold brew" image={coldbrew} />
            <ItemCard name="iced latte" image={icedlatte} />
            <ItemCard name="iced cappuccino" image={icedcap} />
          </HStack>
          <Text>Pastry</Text>
          <HStack>
            <ItemCard name="croissant" image={croissant} />
            <ItemCard name="waffle" image={waffle} />
            <ItemCard name="macaron" image={macaron} />
          </HStack>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default Menu;
