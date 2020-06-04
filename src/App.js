import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddEvent from "./AddEvent";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import UpdateEvent from "./UpdateEvent";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/addEvent" exact={true} component={AddEvent} />
        <Route path="/" exact={true} component={UpdateEvent} />
      </Switch>
    </Router>
  );
}

export default App;
