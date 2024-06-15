import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const OrderModal = ({ isOpen, onClose, order, isReadOnly }) => {
  const [formData, setFormData] = useState({ ...order });

  useEffect(() => {
    if (order && order.lastModified) {
      setFormData({
        ...order,
        lastModified: new Date(order.lastModified)
      });
    } else {
      setFormData(order);
    }
  }, [order]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, lastModified: date });
  };

  const handleSave = () => {
    console.log(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isReadOnly ? 'View Order' : 'Edit Order'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isReadOnly={isReadOnly}>
            <FormLabel>Customer Name</FormLabel>
            <Input name="customerName" value={formData.customerName || ''} onChange={handleInputChange} />
            <FormLabel>Price (₹)</FormLabel>
            <Input name="price" value={formData.price || ''} onChange={handleInputChange} />
            <FormLabel>Last Modified</FormLabel>
            <DatePicker 
              selected={formData.lastModified} 
              onChange={handleDateChange} 
              dateFormat="dd/MM/yyyy" 
              disabled={isReadOnly} 
            />
          </FormControl>
        </ModalBody>
        {!isReadOnly && (
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

export default OrderModal;
