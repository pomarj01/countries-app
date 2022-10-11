import React from "react";
import Link from "next/link";
import { Box, Flex, Image } from "@chakra-ui/react";

const CountryCard = ({ country }) => {
  const { flag, name, population, region, capital } = country;

  
  return (
    <Link href={`/countries/${name}`}>
      <Flex flexDirection='column' w="100%" borderRadius="md" boxShadow="base" overflow="hidden">
        <Flex height='100%'>
          <Image src={flag} maxH='200px' height='100%' fallbackSrc='https://via.placeholder.com/150'/>
        </Flex>

        <Flex p="6" flexDirection='column' justifyContent='flex-end'>
          <Box my="2" fontSize="md" fontWeight="semibold">
            {name}
          </Box>

          <Box fontSize="sm">
            <Box as="span" fontWeight="semibold" pr={1}>
              Population:
            </Box>
            {population.toLocaleString()}
          </Box>

          <Box fontSize="sm">
            <Box as="span" fontWeight="semibold" pr={1}>
              Region:
            </Box>
            {region}
          </Box>

          <Box fontSize="sm">
            <Box as="span" fontWeight="semibold" pr={1}>
              Capital:
            </Box>
            {capital}
          </Box>
        </Flex>
      </Flex>
    </Link>
  );
};

export default CountryCard;
