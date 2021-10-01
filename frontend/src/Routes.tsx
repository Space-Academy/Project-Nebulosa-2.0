import Home from "pages/Home";
import Login from "pages/Login";
import ForgotPassword from "pages/ForgotPassword";
import Register from "pages/Register";
import PanelHome from "pages/PanelHome";

import {BrowserRouter, Switch, Route} from "react-router-dom";

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
        </Switch>
        </BrowserRouter>
    );
};
export default Routes;