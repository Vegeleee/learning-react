import React from 'react'
import PropTypes from 'prop-types'
import './../../stylesheets/ColorDetails.scss'

const ColorDetails = ({ title, color, history }) =>
	// (!color) ?
	<div className="color-details"
		style={{ backgroundColor: color }}
		onClick={() => history.goBack()}>
		<h1>{title}</h1>
		<h1>{color}</h1>
	</div>

ColorDetails.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired
}

export default ColorDetails