import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./css/style.css";
import Home from "./pages/Home";
import NoRoute from "./pages/NoRoute";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <NoRoute />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
