import React from "react";
import jwtDecode from "jwt-decode";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redux
import { setCurrentUser } from "./actions/authActions";
import setAuthToken from "./services/setAuthToken";
import store from "./app/store";

//Components
import HomePage from "./components/pages/HomePage/HomePage";
import Login from "../src/components/pages/Login/Login";
import Projet from "./components/pages/Projet/Projet";
import Gallery from "./components/pages/Gallery/Gallery";
import Contact from "./components/pages/Contact/Contact";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import DashboardProfile from "./components/pages/DashboardProfile/DashboardProfile";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import NavBar from "./components/elements/Navbar/Navbar";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwtDecode(token);

  store.dispatch(setCurrentUser(decoded));
}

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/admin/login" component={Login} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/projet/:id" component={Projet} />
        <AdminRoute exact path="/admin/dashboard" component={Dashboard} />
        <AdminRoute
          exact
          path="/admin/dashboard/profil"
          component={DashboardProfile}
        />
      </Switch>
    </Router>
  );
}

export default App;
