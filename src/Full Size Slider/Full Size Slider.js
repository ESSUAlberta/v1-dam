import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class FullSizeSlider extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        timeout: PropTypes.number,
        dotsVisible: PropTypes.bool
    }

    render() {
        return (
            <div>
                Full Size Slider Here
            </div>
        )
    }
}

export default FullSizeSlider
