import React, { useState, useEffect } from "react";
import axios from "axios";
import { api_routes } from "./api/routes";
import CountryCard from "./countries/Countries";
import {
  Container,
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  FormControl,
  Select,
  Spacer,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { theme } from "./theme";


const Home = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState(null);
  const [spinnerVisible, setSpinnerVisible] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const { GET_ALL_COUNTRIES, GET_COUNTRY, FILTER_REGION } = api_routes;

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const getCountries = async () => {
    try {
      setSpinnerVisible(true);
      const response = await axios.get(GET_ALL_COUNTRIES);
      const results = response.data;

      if (response.status === 200) {
        setCountries(results);
      }
    } catch (error) {
      console.log(error);
    }
    setSpinnerVisible(false);
  };

  const filterRegion = async () => {
    try {
      if (region !== null) {
        setSpinnerVisible(true);
        const response = await axios.get(FILTER_REGION + region);
        const results = response.data;
  
        if (response.status === 200) {
          setCountries(results);
        }
      } else {
        console.log("Provide region to filter")
      }
    } catch (error) {
      console.log(error)
    }
    
    setSpinnerVisible(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(GET_COUNTRY + searchTerm);
      const results = response.data;

      if (response.status === 200) {
        setCountries(results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setRegion(e.target.value);
  }

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    filterRegion(FILTER_REGION, region);
  }, [region]);

  useEffect(() => {

  })
  

  return (
    <Container maxW="container.xl">
      <Box fontSize="xl" px="6" spacing="20px">
        <Flex py={8}>
          <Flex>
            <form onSubmit={handleSubmit}>
              <InputGroup>
                <InputLeftElement pointerEvents="none" alignItems="center">
                  <SearchIcon color="gray.300"></SearchIcon>
                </InputLeftElement>
                <Input
                  name="country"
                  type="search"
                  value={searchTerm}
                  onChange={handleSearchOnChange}
                  placeholder="Search for a country..."
                  background={theme.colors.white_elements}
                />
              </InputGroup>
            </form>
          </Flex>

          <Spacer />
          <Flex>
            <FormControl>
              <Select
                w="auto"
                placeholder="Filter by region"
                onChange={handleFilterChange}
              >
                {regions.map((region, _index) => (
                  <option key={_index} value={region}>
                    {region}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Flex>
        </Flex>

        {spinnerVisible ? (
          <Flex justifyContent="center">
            <Spinner size="xl" />
          </Flex>
        ) : (
          <SimpleGrid columns={[1, null, 4]} spacing="30px">
            {countries && countries?.length > 0
              ? countries.map((country, _index) => (
                  <CountryCard key={_index} country={country} />
                ))
              : null}
          </SimpleGrid>
        )}
      </Box>
    </Container>
  );
};

export default Home;