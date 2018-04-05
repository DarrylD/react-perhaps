import styled from 'styled-components'

export const Center = styled.div`
    text-align: center;
    width: 100%;
    padding: ${props => (props.spacing ? '30px 0' : 0)};
`

export const Button = styled.button`
    background: white;
    color: #70a0db;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #70a0db;
    border-radius: 3px;

    ${props => props.css};
`

export const Card = styled.div`
    border-radius: 4px;
    background: white;
    padding: 15px;
    overflow: hidden;
    margin: 10px;
    box-shadow: rgba(0, 0, 0, 0.28) 1px 1px 3px 1px;
`

export const Title = styled.h1`
    text-align: center;
`

export const PageStatus = styled(Title)`
    padding-top: 30;
`
