//@flow

import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './styles.module.scss'

import {
    Card,
    Button,
    Center,
    Title,
    PageStatus,
} from '../../components/CommonUI'

import { doPing } from '../../store/ping'

@connect(({ isPinging }) => ({ isPinging }), dispatch => ({ dispatch }))
export default class Start extends Component<> {
    state = {
        doneLoading: false,
    }

    async bootstrap() {
        //example dispatches
        this.props.dispatch(doPing())

        this.setState({
            doneLoading: !this.state.doneLoading,
        })
    }

    componentDidMount() {
        this.bootstrap()
    }

    render() {
        const { doneLoading } = this.state

        //need to handle some statuses before we get to the page
        if (!doneLoading) return <PageStatus>Loading...</PageStatus>

        return (
            <div className={styles.color}>
                <Center>
                    <Card padding>
                        <Title>New base page</Title>
                        <Title>:]</Title>
                        <Button>A nice button</Button>
                    </Card>
                </Center>
            </div>
        )
    }
}
