import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  About,
  PrivateRoute,
  Products,
  SingleProduct,
  Cart,
  AuthWrapper,
  Error,
  Checkout,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/products/:id">
            <SingleProduct />
          </Route>
          <PrivateRoute exact path="/checkout">
            <Checkout />
          </PrivateRoute>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
