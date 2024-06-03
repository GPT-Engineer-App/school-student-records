import React from "react";
import { Container, VStack, Input, Button, Text } from "@chakra-ui/react";

const Login = () => {
  return (
    <Container centerContent maxW="container.sm" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Student Login
        </Text>
        <Input placeholder="Student ID" size="lg" />
        <Input placeholder="Password" type="password" size="lg" />
        <Button colorScheme="teal" size="lg" width="100%">
          Login
        </Button>
      </VStack>
    </Container>
  );
};

export default Login;
