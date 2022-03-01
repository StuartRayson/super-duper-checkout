import { Basket } from "./components/Basket";
import { ProductList } from "./components/ProductList";
import { BasketContextProvider } from "./contexts/basketContext";

/* ToDo: 
- Create unit test for product
- Create context for basket
- Add item to context for basket to display
*/

function App() {
  return (
    <div>
      <BasketContextProvider>
        <ProductList />
        <Basket />
      </BasketContextProvider>
    </div>
  );
}

export default App;
