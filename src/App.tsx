import { Checkout } from "./components/Checkout";
import { BasketContextProvider } from "./contexts/basketContext";

/* ToDo: 
- Additional intergration test for Add/Remove with basket Context 
- Test for helper calculation
- Make it looks pretty with some UI work
*/

function App() {
  return (
    <BasketContextProvider>
      <Checkout />
    </BasketContextProvider>
  );
}

export default App;
