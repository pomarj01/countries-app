import React from "react";
import {
  Flex,
  Center,
  Heading,
  Spacer,
  Text
} from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import { theme } from "../theme";

const NavHeader = () => (
  <Flex px={10} py={6} shadow="md" bg={theme.colors.white_elements}>
    <Heading as="h4" size="md">
      Where in the world?
    </Heading>

    <Spacer />

    <Flex>
      <Center>
        <MoonIcon color="gray.300" />
      </Center>
      <Center w="100px">
        <Text>Dark Mode</Text>
      </Center>
    </Flex>
  </Flex>
);

export default NavHeader;
