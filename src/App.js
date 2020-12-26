import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { auth } from './firebase/firebase';
import { useStateValue } from './context/StateProvider';
import './App.css';


function App() {

  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      if (authUser) {//the user just logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {//the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, [dispatch]);

  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
