import React from 'react';
import TopViewCard from '../components/TopViewCard';
import { Flex } from '@chakra-ui/react';
const TopViewItem = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} height={'100vh'}>
      <TopViewCard />
    </Flex>
  );
};

export default TopViewItem;
