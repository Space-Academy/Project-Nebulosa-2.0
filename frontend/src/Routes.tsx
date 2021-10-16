import Home from "pages/Home";
import Login from "pages/Login";
import ForgotPassword from "pages/ForgotPassword";
import Register from "pages/Register";
import PanelHome from "pages/PanelHome";
import Profile from "pages/Profile";
import EditProfile from "pages/EditProfile";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import FindTrail from "pages/FindTrail";
import TrailContent from "pages/TrailContent";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Login" exact>
          <Login />
        </Route>
        <Route path="/Register" exact>
          <Register />
        </Route>
        <Route path="/ForgotPassword" exact>
          <ForgotPassword />
        </Route>
        <Route path="/PanelHome" exact>
          <PanelHome />
        </Route>
        <Route path="/Profile" exact>
          <Profile />
        </Route>
        <Route path="/EditProfile" exact>
          <EditProfile />
        </Route>
        <Route path="/FindTrail" exact>
          <FindTrail />
        </Route>
        <Route path="/trilha-bolsa-de-valores" exact>
          <TrailContent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
