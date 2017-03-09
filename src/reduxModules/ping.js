//@flow

import { handleActions } from 'redux-actions'

const initialState = {
     isPinging: false
}

const actions = {
    'ping': (bool) => {
        return { isPinging: bool || true }
    },

    'pong': () => {
        return { isPinging: false }
    },

}

export const reducer = handleActions(actions, initialState)

export function doPing() {
    return { type: 'PING' };
}

export function doHardPing(bool:boolean) {
    return { type: 'PING', bool };
}
