import React,{ Fragment } from "react";
import Header from './components/Layout/Header';
import Meals from "./components/Meals/Meals";
import Cart from './components/'

function App() {
    return ( <Fragment>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
    );
}

export default App;