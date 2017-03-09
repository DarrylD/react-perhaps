
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router'

import App from './containers/App';
import NotFound from './containers/NotFound';
import Start from './containers/Start';

const Routes = (props) => (
    <Router {...props} >
        <Route path="/" component={App}>

            <IndexRoute component={Start}/>

            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);

export default Routes;
