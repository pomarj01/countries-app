import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import { api_routes } from "../api/routes";
import { Container, Box } from "@chakra-ui/react";
import CountryInfo from "./CountryInfo";


const CountryItem = () => {
  const router = useRouter();
  const { id } = router.query;
  const { GET_COUNTRY } = api_routes;
  const [ countryItem, setCountryItem ] = useState([]);

  const fetchCountry = async () => {
    try {
      const response = await axios.get(GET_COUNTRY + id);
      const results = Object.values(response.data);

      if (response.status === 200) {
        setCountryItem(results);
      }

    } catch (error) {
      console.log(error) 
    }
  }

  useEffect(() => {
    fetchCountry();
  }, [id]);

  console.log(countryItem)
  return (
    <Container maxW="container.xl">
      <Box fontSize="xl" px={10} py={6} spacing="20px">
        {countryItem?.map((item, _index) => (
          <CountryInfo key={_index} item={item} />
        ))}
      </Box>
    </Container>
  );
}

export default CountryItem;