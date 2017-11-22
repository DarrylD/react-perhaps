// @flow
import React, { Component } from 'react'

import { Provider } from 'react-redux'

import Routes from '../../routes'
import configureStore from '../../configureStore'

const store = configureStore()

export default class App extends Component {
    componentDidMount() {
        console.log('App')
    }

    render() {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        )
    }
}
