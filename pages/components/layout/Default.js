import React from "react"
import { Box } from "@chakra-ui/react";
import Header from "../Header";
import { theme } from "../../theme";


const DefaultLayout = ({ children }) => (
  <Box 
    display="flex"
    minHeight="100vh"
    height="100%"
    flexDirection="column"
    bg={theme.colors.light_mode_veryLightGray_background}
  >
    <Header />
    <>{children}</>
  </Box>
);

export default DefaultLayout;