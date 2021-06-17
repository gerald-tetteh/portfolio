import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./css/style.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
