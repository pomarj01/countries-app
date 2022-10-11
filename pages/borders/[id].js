import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { api_routes } from "../api/routes";
import { Container, Box } from "@chakra-ui/react";
import CountryInfo from "../countries/CountryInfo";

const BorderCountry = () => {
  const router = useRouter();
  const { id } = router.query;
  const { GET_BORDER_COUNTRY } = api_routes;
  const [ borderCountry, setBorderCountry ] = useState([]);

  const fetchBorder = async () => {
    try {
      if (borderCountry && borderCountry !== undefined) {
        const response = await axios.get(GET_BORDER_COUNTRY + id);
        const results = response.data;
        setBorderCountry([results]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBorder();
  }, [id]);

  return (
    <Container maxW="container.xl">
      <Box fontSize="xl" px={10} py={6} spacing="20px">
        {borderCountry &&
          borderCountry?.map((item, _index) => (
            <CountryInfo key={_index} item={item} />
          ))}
      </Box>
    </Container>
  );
};

export default BorderCountry;
