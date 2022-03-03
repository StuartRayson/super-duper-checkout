import { ChakraProvider } from "@chakra-ui/react";
import { Checkout } from "./components/template/Checkout";
import { BasketContextProvider } from "./contexts/basketContext";

/* ToDo: 
- Make it looks pretty with some UI work
*/

function App() {
  return (
    <ChakraProvider>
      <BasketContextProvider>
        <Checkout />
      </BasketContextProvider>
    </ChakraProvider>
  );
}

export default App;
