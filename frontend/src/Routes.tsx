import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
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
        </Switch>
        </BrowserRouter>
    );
};
export default Routes;