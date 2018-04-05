//@flow

import React, { Component } from 'react'

import {
    Card,
    Button,
    Center,
    Title,
    PageStatus,
} from '../../components/CommonUI'

import { css } from 'styled-components'

const red = css`
    color: red;
`

export default class Start extends Component {
    state = {
        loaded: false,
    }

    componentDidMount() {
        this.setState({
            loaded: !this.state.loaded,
        })
    }

    render() {
        const { loaded } = this.state

        //need to handle some statuses before we get to the page
        if (!loaded) return <PageStatus>Loading...</PageStatus>

        return (
            <div>
                <Center>
                    <Card padding>
                        <Title>New base page</Title>
                        <Title>:]</Title>
                        <Button css={red}>A nice button</Button>
                    </Card>
                </Center>
            </div>
        )
    }
}
