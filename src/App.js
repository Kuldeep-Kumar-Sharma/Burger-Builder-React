import React from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import "./App.module.css";

function App() {
  return (
    <Layout>
      <BurgerBuilder></BurgerBuilder>
    </Layout>
  );
}

export default App;
