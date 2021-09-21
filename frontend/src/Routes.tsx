import Home from "pages/Home";
import Login from "pages/Login";
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
        </Switch>
        </BrowserRouter>
    );
};
export default Routes;