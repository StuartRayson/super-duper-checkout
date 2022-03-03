import { Checkout } from "./components/template/Checkout";
import { BasketContextProvider } from "./contexts/basketContext";

/* ToDo: 
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
