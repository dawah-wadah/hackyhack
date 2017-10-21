import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./homepage/homepage.jsx";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Homepage} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
