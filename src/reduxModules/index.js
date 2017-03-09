import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import * as ping from './ping'

//TODO export all the available actions, maybe?
/*
    NOTE expected
    import {
        ping:{
            doPing,
            doHardPing,
        }, 
        doHardPing
    } from './reduxModules';
 */

export default combineReducers({
    routing: routerReducer,
    ping:    ping.reducer,
})
