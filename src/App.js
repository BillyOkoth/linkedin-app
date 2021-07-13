import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Main from './components/main'
import Header from "./components/header";
import Home from "./components/home"


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
          <Login/>
          </Route>
          <Route exact path="/home"> 
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
