import "./App.css";
import Header from "./components/Header/Header.js";
import Shop from "./components/shop/shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./components/Error/Error";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Review from "./components/review/Review";
import Inventory from "./components/inventory/Inventory";
import React, { createContext, useState } from "react";
import Shipment from "./components/shipment/Shipment";
import Login from "./components/Login/Login";
import PriveteRoute from "./components/Privetroute/PriveteRoute";

export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState({});

  return (
    <UserContext.Provider value={[loggedIn, setLoggedIn]}>
     <h3>{loggedIn.email}</h3>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/manage">
            <Inventory></Inventory>
          </Route>
          <PriveteRoute path="/shipment">
            <Shipment></Shipment>
          </PriveteRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/Product/:ProductKey">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
