import React from 'react'
import { render } from 'react-dom'
import $ from 'jquery'

import Sample from './sample'

render(
    <Sample />,
    $('#component').get(0)
);