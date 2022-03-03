import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Checkout } from "./components/template/Checkout";
import { BasketContextProvider } from "./contexts/basketContext";
import { Fonts } from "./styles/fonts";

const theme = extendTheme({
  fonts: {
    heading: "Playfair Display",
    body: "League Spartan",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />

      <BasketContextProvider>
        <Checkout />
      </BasketContextProvider>
    </ChakraProvider>
  );
}

export default App;
