
import React, {Component} from 'react';

import {
    Card,
    PageStatus
} from '../../components/CommonUI';


export default class NotFound extends Component {

    state = {
        doneLoading: false
    }

    async componentDidMount(){

        await this.setState({ doneLoading: !this.state.doneLoading })
    }

    render() {
        const {doneLoading} = this.state

        //need to handle some statuses before we get to the page
        if (!doneLoading) return <PageStatus>Loading...</PageStatus>

        return (
            <div className="main">
                <div className="container">

                    <div className="row restack">
                        <div className="twelve column restack-down">
                            <Card padding style={{textAlign: 'center'}}>
                                <h1>Page not found</h1>
                                <h1>:(</h1>
                            </Card>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
