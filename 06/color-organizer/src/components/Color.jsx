import React from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import './../stylesheets/Color.scss'

const Color = ({title, color, rating=0, onRate=f=>f, onRemove=f=>f}) => {
	return (
		<section className="color">
			<h1>{title}</h1>
			<button onClick={onRemove}>X</button>
			<div className="color"
				style={{ backgroundColor: color }}>
			</div>
			<div>
				{/* <StarRating starsSelected={rating} onRate={onRate} /> */}
			</div>
		</section>
	)
}

Color.propTypes = {
	title: PropTypes.string,
	color: PropTypes.string,
	rating: PropTypes.number,
	onRate: PropTypes.func,
	onRemove: PropTypes.func
}

export default Color
