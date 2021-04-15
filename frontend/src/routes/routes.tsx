
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact>
                    <Home />
                </Route>
                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;