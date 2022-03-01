import { Basket } from "./components/Basket";
import { ProductList } from "./components/ProductList";
import { BasketContextProvider } from "./contexts/basketContext";

/* ToDo: 
- Additional intergration test for Add/Remove with basket Context 
- Test for helper calculation
- Make it looks pretty with some UI work
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
