//@flow

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import '../css/index.scss'


import {
    Card,
    Button,
    Center,
    Title,
    PageStatus
} from '../components/CommonUI';

storiesOf('Button', module)
    .add('with text', () => (
        <Center>
            <Button onClick={ action('clicked') }>A nice button</Button>
        </Center>

    ))
    .add('with some emoji', () => (
        <Center>
            <Button onClick={ action('clicked') }>
                😀 😎 👍 💯
            </Button>
        </Center>
    ));
