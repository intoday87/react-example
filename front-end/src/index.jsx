import React from 'react'
import { render } from 'react-dom'
import $ from 'jquery'

import Sample from './sample';

render(
    <Sample />,
    $('body').get(0)
)