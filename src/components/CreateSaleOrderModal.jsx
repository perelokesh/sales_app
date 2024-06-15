import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from '@chakra-ui/react';

const CreateSaleOrderModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [order, setOrder] = useState({ name: '', quantity: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
  };

  const handleSubmit = () => {
    // Handle the form submission
    console.log(order);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>+ Sale Order</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Sale Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Order Name</FormLabel>
              <Input
                name="name"
                value={order.name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Quantity</FormLabel>
              <Input
                name="quantity"
                type="number"
                value={order.quantity}
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateSaleOrderModal;
