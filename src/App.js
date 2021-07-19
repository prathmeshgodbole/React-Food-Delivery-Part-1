import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from './store/cartProvider';

function App() {
  const [cartIsShown, SetCartIsShown] = useState(false);
  const ShowCartHandler = () => {
    SetCartIsShown(true);
  };
  const HideCartHandler = () => {
    SetCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={HideCartHandler} />}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
