import { Flex } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';
const ItemPreview = () => {
 
  return (
    <Flex alignItems={'center'} justifyContent={'center'} height={'100vh'}>
      <ItemCard  />
    </Flex>
  );
};

export default ItemPreview;
