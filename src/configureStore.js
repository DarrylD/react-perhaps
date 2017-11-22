import { createStore, applyMiddleware, compose } from 'redux'

import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import { rootReducer, epicMiddleware } from './store'

export const history = createBrowserHistory()

export default function configureStore() {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        connectRouter(history)(rootReducer),

        rootReducer,

        composeEnhancers(
            applyMiddleware(epicMiddleware, routerMiddleware(history))
        )
    )

    return store
}
