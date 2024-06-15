// src/pages/SaleOrders.js
import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Button } from '@chakra-ui/react';
import ActiveOrders from './ActiveOrder';
import CompletedOrders from './CompleteOrder';

const SaleOrders = () => {
  return (
    <Box p={4}>
      <Button onClick={() => {/* Open modal to create a new sale order */}}>+ Sale Order</Button>
      <Tabs>
        <TabList>
          <Tab>Active Orders</Tab>
          <Tab>Completed Orders</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ActiveOrders />
          </TabPanel>
          <TabPanel>
            <CompletedOrders />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default SaleOrders;
