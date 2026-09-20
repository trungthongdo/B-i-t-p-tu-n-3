import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import { fetchProducts } from "./features/products/productsSlice";
import ProductList from "./features/products/ProductList";
import CartSummary from "./features/cart/CartSummary";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>🛒 Shopping Cart</h1>
        <p>Module giỏ hàng với Redux Toolkit + TypeScript</p>
      </header>

      <ProductList />
      <CartSummary />
    </div>
  );
}

export default App;
