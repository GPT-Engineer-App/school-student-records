import React from "react";
import { Link } from "react-router-dom";
import { HStack, Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <HStack spacing={4} justifyContent="center" py={4}>
      <Button as={Link} to="/" colorScheme="teal" variant="outline">
        Home
      </Button>
      <Button as={Link} to="/login" colorScheme="teal" variant="outline">
        Login
      </Button>
    </HStack>
  );
};

export default Navigation;
