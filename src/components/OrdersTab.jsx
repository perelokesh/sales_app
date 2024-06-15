import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Button, useDisclosure } from '@chakra-ui/react';
import ActiveOrders from './ActiveOrder';
import CompletedOrders from './CompleteOrder';
import CreateSaleOrderModal from './CreateSaleOrderModal';

const OrdersTabs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tabs>
        <Flex justifyContent="space-between" alignItems="center">
          <TabList>
            <Tab>Active Orders</Tab>
            <Tab>Completed Orders</Tab>
          </TabList>
          <CreateSaleOrderModal isOpen={isOpen} onClose={onClose} />
          </Flex>
        <TabPanels>
          <TabPanel>
            <ActiveOrders />
          </TabPanel>
          <TabPanel>
            <CompletedOrders />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default OrdersTabs;
