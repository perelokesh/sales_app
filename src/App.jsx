import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider, extendTheme, Box, Heading } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoginPage from './components/LoginPage';

import ThemeToggle from './components/ThemeToggle';
import OrdersTabs from './components/OrdersTab';
import ProtectedRoute from './components/ProtectedRoute';

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
});

const queryClient = new QueryClient();

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const savedAuth = localStorage.getItem('auth');
    if (savedAuth) {
      setAuth(JSON.parse(savedAuth));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth));
  }, [auth]);

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Box>
            <ThemeToggle />
            <Box textAlign="center" mt="4rem">
              <Heading as="h1" size="xl">Orders Table</Heading>
            </Box>
            <Routes>
              <Route path="/login" element={<LoginPage setAuth={setAuth} />} />
              <Route
                path="/orders"
                element={
                  <ProtectedRoute auth={auth}>
                    <OrdersTabs />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </Box>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
