import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';

const LoginPage = ({ setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
  
    if (username === 'user' && password === 'pass') {
      setAuth(true); 
      navigate('/orders'); 
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Box p={8} maxWidth="400px" mx="auto" mt={8}>
      <Stack spacing={4}>
        <Heading textAlign="center">Login</Heading>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="blue" onClick={handleLogin}>
          Login
        </Button>
        <Text textAlign="center" fontSize="sm">
          Dummy credentials: user / pass
        </Text>
      </Stack>
    </Box>
  );
};

export default LoginPage;
