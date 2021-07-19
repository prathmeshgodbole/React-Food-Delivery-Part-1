import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, SetCartIsShown] = useState(false);
  const ShowCartHandler = () => {
    SetCartIsShown(true);
  };
  const HideCartHandler = () => {
    SetCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={Hide} />}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
