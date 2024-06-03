import React from "react";
import { Container, Text, VStack, HStack, Box, Button, IconButton, Image, Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";
import { FaUserGraduate, FaMoneyBillWave, FaChalkboardTeacher, FaPhotoVideo } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8} width="100%">
        <Text fontSize="4xl" fontWeight="bold">
          School Management App
        </Text>

        <HStack spacing={4} width="100%" justifyContent="space-around">
          <Button leftIcon={<FaUserGraduate />} colorScheme="teal" variant="solid" size="lg">
            Student Records
          </Button>
          <Button leftIcon={<FaMoneyBillWave />} colorScheme="teal" variant="solid" size="lg">
            Fee Records
          </Button>
          <Button leftIcon={<FaChalkboardTeacher />} colorScheme="teal" variant="solid" size="lg">
            Class Activities
          </Button>
          <Button leftIcon={<FaPhotoVideo />} colorScheme="teal" variant="solid" size="lg">
            Photo Gallery
          </Button>
        </HStack>

        <Box width="100%">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Student Records
          </Text>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Student Attendance and Fee Records</TableCaption>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Class</Th>
                  <Th>Attendance</Th>
                  <Th>Fee Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>John Doe</Td>
                  <Td>10th Grade</Td>
                  <Td>95%</Td>
                  <Td>Paid</Td>
                </Tr>
                <Tr>
                  <Td>Jane Smith</Td>
                  <Td>9th Grade</Td>
                  <Td>98%</Td>
                  <Td>Pending</Td>
                </Tr>
                <Tr>
                  <Td>Sam Wilson</Td>
                  <Td>11th Grade</Td>
                  <Td>89%</Td>
                  <Td>Paid</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Box width="100%">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Class Activities
          </Text>
          <VStack spacing={4} align="start">
            <Box p={4} shadow="md" borderWidth="1px" width="100%">
              <Text fontSize="xl">Science Fair</Text>
              <Text mt={2}>Date: 2023-10-15</Text>
              <Text mt={2}>Description: Annual science fair showcasing projects from students.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" width="100%">
              <Text fontSize="xl">Math Olympiad</Text>
              <Text mt={2}>Date: 2023-11-10</Text>
              <Text mt={2}>Description: Competitive math event for students to solve challenging problems.</Text>
            </Box>
          </VStack>
        </Box>

        <Box width="100%">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Photo Gallery
          </Text>
          <HStack spacing={4} wrap="wrap">
            <Image boxSize="150px" src="https://images.unsplash.com/photo-1560439514-4e9645039924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBldmVudHxlbnwwfHx8fDE3MTczOTkwNDR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="School Event" />
            <Image boxSize="150px" src="https://images.unsplash.com/photo-1633762348290-33a37f4d7fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBhY3Rpdml0eXxlbnwwfHx8fDE3MTczOTkwNDV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Classroom Activity" />
            <Image boxSize="150px" src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwZ3JvdXAlMjBwaG90b3xlbnwwfHx8fDE3MTczOTkwNDV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Student Group Photo" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
