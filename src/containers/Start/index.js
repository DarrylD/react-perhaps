//@flow

import React, {Component} from 'react';
import { connect } from 'react-redux';

import {
    Card,
    Button,
    Center,
    Title,
    PageStatus
} from '../../components/CommonUI';

import api from '../../api';

import {doPing, doHardPing} from '../../reduxModules/ping';


@connect(
    ({ isPinging }) => ({ isPinging }),
    dispatch => ({ dispatch })
)
export default class Start extends Component {

    state = {
        doneLoading: false
    }

    async bootstrap(){

        //example dispatches
        this.props.dispatch({ type: 'PING' })
        this.props.dispatch( doPing() )
        this.props.dispatch( doHardPing() )

        //example request
        const something  = await api.fetchSomething({
            numberOfStuff: 3
        }, true)

        console.log(something);

        await this.setState({ doneLoading: !this.state.doneLoading })


    }

    componentDidMount(){

        this.bootstrap()
    }

    render() {
        const {doneLoading} = this.state

        //need to handle some statuses before we get to the page
        if (!doneLoading) return <PageStatus>Loading...</PageStatus>

        return (
            <div className="main">
                <div className="container">

                    <div className="row">
                        <div className="twelve column">
                            <Center>
                                <Card padding>
                                    <Title>New base page</Title>
                                    <Title>:]</Title>
                                    <Button>A nice button</Button>
                                </Card>
                            </Center>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
