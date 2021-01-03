import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import CategoriesScreen from "./screens/CategoriesScreen";
import ElectronicShopScreen from "./screens/ElectronicShopScreen";
import ClothingShopScreen from "./screens/ClothingShopScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={CategoriesScreen} exact />
          <Route path="/electronics" component={ElectronicShopScreen} exact />
          <Route path="/clothing" component={ClothingShopScreen} exact />
        </Container>
      </main>
    </Router>
  );
};

export default App;
