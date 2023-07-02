import * as React from "react";
    Link
import { Container, chakra, Stack, Text, Button, Box, Link } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FaBook, FaSearch } from "react-icons/fa";
import NextLink from "next/link";

const HeroSection = () => {
  return (
    <Container p={{ base: 8, sm: 14 }}>
      <Stack direction="column" spacing={4} alignItems="center">
        <Box
          py={2}
          px={3}
          bg="red.400"
          w="max-content"
          color="white"
          rounded="md"
          fontSize="sm"
        >
          <Stack direction={{ base: "column", sm: "row" }}>
            <Text fontWeight="bold">Ready, Set, Save!</Text>
            <Text>Join CPRtify Today!</Text>
          </Stack>
        </Box>
        <chakra.h4
          fontSize={{ base: "3xl", sm: "4xl" }}
          fontWeight="bold"
          textAlign="center"
          maxW="600px"
        >
          Be prepared to save a life with CPR certification course{" "}
          <chakra.span
            color="red.400"
            bg="linear-gradient(transparent 50%, red.400 50%)"
          >
            from the experts.
          </chakra.span>
        </chakra.h4>
        <Text maxW="550px" fontSize="l" textAlign="center" color="gray.500">
          From healthcare professionals to concerned citizens, our comprehensive
          CPR certification courses are designed to equip everyone with the
          knowledge and confidence to act quickly in an emergency.{" "}
        </Text>
        <Stack
          direction={{ base: "column", sm: "row" }}
          w={{ base: "100%", sm: "auto" }}
          spacing={5}
        >
          <Link as={NextLink} href="/courses">
            <Button
              leftIcon={<FaSearch />}
              colorScheme="red"
              variant="outline"
              rounded="md"
              size="lg"
              height="3.5rem"
              fontSize="1.2rem"
            >
              Find Classes
            </Button>
          </Link>

          <Button
            leftIcon={<FaBook />}
            colorScheme="gray"
            variant="outline"
            rounded="md"
            size="lg"
            height="3.5rem"
            fontSize="1.2rem"
          >
            About Us
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HeroSection;
