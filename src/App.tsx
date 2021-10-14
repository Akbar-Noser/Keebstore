import React, { useContext } from "react";
import "./CSS/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import StorePage from "./StorePage";
import NavProvider, { Navbar, NavContext } from "./Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavProvider>
          <Navbar />
          <Switch>
            <Route exact path="">
              <HomePage />
            </Route>
            <Route exact path="/store">
              <StorePage />
            </Route>
          </Switch>
        </NavProvider>
      </Router>
    </div>
  );
}

export default App;
