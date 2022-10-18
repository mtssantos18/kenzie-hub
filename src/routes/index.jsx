import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Login
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/register">
          <Register authenticated={authenticated} />
        </Route>
        <Route path="/dashboard">
          <Dashboard
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
