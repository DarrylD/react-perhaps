// @flow
import React, {Component} from 'react';

//NOTE this is useful for sidemenus or whatever needs to be avail through the app

export default class App extends Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
