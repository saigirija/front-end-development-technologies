import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ReactHooks from "./components/React_Hooks";

export const ValueContext = React.createContext();

function App() {
  const [dataValue, setDataValue] = useState(0);

  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/">
            <img
              src="https://www.nicepng.com/png/detail/947-9477723_front-end-development-logos-for-example-html-5.png"
              alt="Home logo"
              id="home"
            />
          </Link>
          <h1>Front End Web Development Course</h1>
        </header>
        <ValueContext.Provider
          value={{ dataValue: dataValue, setDataValue: setDataValue }}
        >
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/react_hooks">
                <ReactHooks />
              </Route>
            </Switch>
          </main>
        </ValueContext.Provider>
        <footer>
          &copy; All rights reserved. <b>Suresh Chidurala</b>
        </footer>
      </div>
    </Router>
  );
}

export default App;
