import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Box, Table, Thead, Tbody, Tr, Th, Td, IconButton } from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';
import OrderModal from './OrderModal';
import { fetchOrders } from '../api/orders';

const CompletedOrders = () => {
    const { data, isLoading } = useQuery({
      queryKey: ['completedOrders'],
      queryFn: fetchOrders,
    });
  
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
  
    const handleOpenModal = (order) => {
      setSelectedOrder(order);
      setIsOpen(true);
    };
  
    if (isLoading) return <Box>Loading...</Box>;
  
    return (
      <Box>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Customer Name</Th>
              <Th>Price (₹)</Th>
              <Th>Last Modified</Th>
              <Th>Edit/View</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((order) => (
              <Tr key={order.id}>
                <Td>{order.id}</Td>
                <Td>{order.customerName}</Td>
                <Td>₹ {order.price}</Td>
                <Td>{order.lastModified.toLocaleString()}</Td>
                <Td>
                  <IconButton 
                    icon={<BsThreeDots />} 
                    onClick={() => handleOpenModal(order)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        {selectedOrder && (
          <OrderModal 
            isOpen={isOpen} 
            onClose={() => setIsOpen(false)} 
            order={selectedOrder} 
            isReadOnly={true} 
          />
        )}
      </Box>
    );
  };
  
  export default CompletedOrders;
  