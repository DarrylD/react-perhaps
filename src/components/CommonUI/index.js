// @flow

import React from 'react';
import styled from 'styled-components';

// import FontAwesome  from 'react-fontawesome'
// import Transition from 'react-motion-ui-pack'
// import {spring} from 'react-motion'

/* NOTE snippet

    type NewCompProps = {
        children?: any,
        style?: Object,
    }
    export const NewComp = ({children, style, ...rest}: NewCompProps) => {

        const baseStyle = {

        }

        return (
            <div style={{...baseStyle, ...style}} {...rest}>
                {children}
            </div>
        )
    }

*/


type RowProps = {
    children?: any,
    style?: Object
}
export const Row = ({children, style, ...rest}: RowProps) => {

    const baseStyle = {

    }

    return (

        <div className="row" style={{...baseStyle, ...style}} {...rest}>
            <div className="twelve column">
                {children}
            </div>
        </div>
    )
}

export const Center = styled.div`
    text-align:center;
    width: 100%;
    padding: ${props => props.spacing ? '30px 0' : 0};
`

export const Button = styled.button`
    background: white;
    color: #70a0db;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #70a0db;
    border-radius: 3px;
`

//NOTE misc
type CardProps = {
    children?: any,
    style?: Object,
    spacing?: Object,
    padding?: Boolean,
}
export const Card = ({children, padding, spacing, style}:CardProps) => {
    const cardStyles = {
        borderRadius: '4px',
        background: 'white',
        padding: padding ? 15 : 0,
        overflow: 'hidden',
        marginBottom: spacing ? 30 : 0,
        boxShadow: '1px 1px 3px 1px rgba(0, 0, 0, 0.28)'
    }

    return <div style={{...cardStyles, ...style}}>{children}</div>
}


export const Title = styled.h1`
    text-align:center
`

export const PageStatus = styled(Title)`
    padding-top: 30
`
