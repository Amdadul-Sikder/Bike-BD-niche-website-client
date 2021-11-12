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
import Products from './components/Home/Products/Products';
import Register from './components/Register/Register';
import AuthProvider from './components/Context/AuthProvider/AuthProvider';
import Order from './components/Home/Order/Order';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Explore from './components/Explore/Explore';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Shared/Footer/Footer';
import Orders from './components/Dashboard/Orders/Orders';

function App() {
  return (
    <AuthProvider>
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
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <PrivateRoute path="/order/:orderId">
            <Order />
          </PrivateRoute>
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
    </AuthProvider>
  )
}

export default App;
