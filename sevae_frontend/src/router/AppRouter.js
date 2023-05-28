import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { startChecking } from "../actions/authActions";
import { LoginScreen } from "../components/auth/LoginScreen";
import { HomeScreen } from "../components/homeScreen/HomeScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <h1>Espere..</h1>;
  }

  return (
    <div>
      <Router>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/"
            component={HomeScreen}
            isAuthenticated={!!uid}
          />

          <Redirect to={"/"} />
        </Switch>
      </Router>
    </div>
  );
};
