import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./homepage/homepage.jsx";
import ShowPage from "./show/show.jsx";
import Menu from "./homepage/menu";


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Menu/>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/events/:id" component={ShowPage} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
