import React from 'react'
import { Switch, Route } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'

import { history } from './configureStore'

import Start from './containers/Start'

const Routes = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={Start} />
            <Route render={() => <div>Miss</div>} />
        </Switch>
    </ConnectedRouter>
)

export default Routes
