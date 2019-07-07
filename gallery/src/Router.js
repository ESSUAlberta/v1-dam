import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact component={() => null} path={"/"} />
            {/* <Route exact component={ButtonPage} path={"/Button"} /> */}
            <Route component={() => null} />
        </Switch>
    </BrowserRouter>
);

export default Router;
