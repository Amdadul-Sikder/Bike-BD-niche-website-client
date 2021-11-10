import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Banner from './components/Home/Banner/Banner';
import Login from './components/Shared/Login/Login';
import Contact from './components/Home/Contact/Contact';
import Header from './components/Shared/Header/Header';
import About from './components/Home/About/About';
import Products from './components/Home/Products/Products';
import Register from './components/Register/Register';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/banner">
          <Banner />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
