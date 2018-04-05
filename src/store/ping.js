//@flow

import { handleActions } from 'redux-actions'

import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/do'

const initialState = {
    isPinging: false,
}

const PING = 'PING'
const PONG = 'PONG'

const actions = {
    ping: bool => {
        return { isPinging: bool || true }
    },

    pong: () => {
        return { isPinging: false }
    },
}

export const reducer = handleActions(actions, initialState)

// Action Creators
export const doPing = () => {
    return { type: PING }
}

export const doHardPing = (bool: boolean) => {
    return { type: PING, bool }
}

//Side effects
export const epics = {
    epic: (action$: any) =>
        action$
            .ofType(PING)
            .do(() => console.log('pinged...'))
            .delay(1000) // Asynchronously wait 1000ms then continue
            .mapTo({ type: PONG }),
}
