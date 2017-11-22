//@flow

import React from 'react'
import { storiesOf, action } from '@storybook/react'

import { Card, Button, Center, Title, PageStatus } from './index'

storiesOf('Button', module)
    .add('with text', () => (
        <Center>
            <Button onClick={action('clicked')}>A nice button</Button>
        </Center>
    ))
    .add('with some emoji', () => (
        <Center>
            <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
        </Center>
    ))
