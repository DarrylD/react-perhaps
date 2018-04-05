//@flow

import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'

// want to go through all of our redux modules/ducks and get the reducers
// that we can can combine automagically
// https://stackoverflow.com/a/31770875/240993
// may have some issues with hot module replacement
var req = require.context('./', true, /^(.*\.(js$))[^.]*$/im)

let reducerList = {}
let epicList = []

const handleEpics = epics => {
    // dynamically importing epics
    // inspiration: https://stackoverflow.com/a/22012564/240993
    // solved for: https://github.com/redux-observable/redux-observable/issues/58
    if (!Object.keys(epics).length) console.error('No an epic', epics)

    epicList = [...epicList, ...Object.keys(epics).map(key => epics[key])]
}

const handleReducers = (reducer, name) => {
    //TODO odd edåge case that needs to be addressed
    if (typeof reducer !== 'function') console.error('No a reducer', reducer)

    reducerList[name] = reducer
}

const getReducersAndEpics = key => {
    const { reducer, epics }: { reducer: any, epics: Object } = req(key)

    //index for what?!
    if (key.match('index.js') || (!reducer || !epics)) return

    const name = key.replace('./', '').replace('.js', '')

    if (reducer) handleReducers(reducer, name)

    if (epics) handleEpics(epics)
}

req.keys().forEach(getReducersAndEpics)

// console.log(reducerList)
// console.log(epicList)

export const rootReducer = combineReducers({
    routing: routerReducer,
    ...reducerList,
})

export const epicMiddleware = createEpicMiddleware(
    combineEpics.apply(this, epicList)
)
