import { ChakraProvider } from "@chakra-ui/react";
import { defaultTheme } from "./theme";
import DefaultLayout from './components/layout/Default'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={defaultTheme}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  );
}

export default MyApp
