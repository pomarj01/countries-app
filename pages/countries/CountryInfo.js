import React from "react";
import { useRouter } from "next/router";
import {
  Button,
  Flex,
  Box,
  Image,
  Heading,
  Link,
  Tag,
  SimpleGrid
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { theme } from "../theme";


const Languages = ({ lang, length }) => {
  return (
    <Box as="span">
      {(length ? ', ' : ' ') + lang.name}
    </Box>
  )
};

const Currencies = ({ currencies }) => {
  return (
    <Box as="span">
      {currencies.name}
    </Box>
  )
};

const Borders = ({ border }) => {
  return (
    <SimpleGrid minChildWidth="70px" mr='1' spacing="10px">
      <Tag
        size="xs"
        borderRadius="none"
        py="1"
        px="6"
        bg={theme.colors.white_elements}
        boxShadow="base"
      >
        <Link href={`/borders/${border}`}>{border}</Link>
      </Tag>
    </SimpleGrid>
  );
};

const CountryInfo = ({ item }) => {
  const router = useRouter();

  return (
    <Flex direction="column" gap="10">
      <Box>
        <Button
          leftIcon={<ArrowBackIcon />}
          background={theme.colors.white_elements}
          variant="solid"
          boxShadow="base"
          onClick={() => router.back()}
        >
          Back
        </Button>
      </Box>
      <Box>
        <Flex>
          <Box w="100%">
            <Image
              src={item.flag}
              boxSize="100%"
              fallbackSrc="https://via.placeholder.com/150"
            />
          </Box>
          <Box w="100%">
            <Flex
              w="100%"
              h="100%"
              p={12}
              justifyContent="center"
              direction="column"
              fontSize="xs"
            >
              <Flex direction="column" h="50%">
                <Heading as="h4" size="md">
                  {item.name}
                </Heading>
              </Flex>

              <Flex direction="row" h="100%" gap="16">
                <Flex direction="column" gap="2">
                  <Flex>
                    <Box as="span" fontWeight="semibold" pr={1}>
                      Native Name:
                    </Box>
                    {item.nativeName}
                  </Flex>

                  <Flex>
                    <Box as="span" fontWeight="semibold" pr={1}>
                      Population:
                    </Box>
                    {item.population.toLocaleString()}
                  </Flex>

                  <Flex>
                    <Box as="span" fontWeight="semibold" pr={1}>
                      Region:
                    </Box>
                    {item.region}
                  </Flex>

                  <Flex>
                    <Box as="span" fontWeight="semibold" pr={1}>
                      Sub Region:
                    </Box>
                    {item.subregion}
                  </Flex>

                  <Flex>
                    <Box as="span" fontWeight="semibold" pr={1}>
                      Capital:
                    </Box>
                    {item.capital}
                  </Flex>
                </Flex>

                <Flex direction="column" gap="2">
                  <Flex>
                    <Box as="span" fontWeight="semibold" pr={1}>
                      Top Level Domain:
                    </Box>
                    {Object.values(item.topLevelDomain)}
                  </Flex>

                  <Flex>
                    <Box as="span" fontWeight="semibold" pr={1}>
                      Currencies:
                    </Box>
                    {item.currencies?.map((curr, _index) => (
                      <Currencies key={_index} currencies={curr} />
                    ))}
                  </Flex>

                  <Flex>
                    <Box as="span" fontWeight="semibold" pr={1}>
                      Languages:
                    </Box>
                    {item.languages?.map((lang, index) => (
                      <Languages key={index} lang={lang} length={index} />
                    ))}
                  </Flex>
                </Flex>
              </Flex>

              {item.borders ? (
                <Flex
                  direction="column"
                  gap="2"
                  height="100%"
                  justifyContent="flex-end"
                >
                  <Flex alignItems="center">
                    <Box as="span" fontWeight="semibold" pr={1}>
                      Border Countries:
                    </Box>
                    {item.borders?.map((border, index) => (
                      <Borders key={index} border={border} />
                    ))}
                  </Flex>
                </Flex>
              ) : null}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}


export default CountryInfo;