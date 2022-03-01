import { Basket } from "./components/Basket";
import { ProductList } from "./components/ProductList";
import { BasketContextProvider } from "./contexts/basketContext";

/* ToDo: 
- Add / Remove logic 
- Test logic 
- Total cart calculation
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
