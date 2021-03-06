import { connect } from "react-redux"
import AddColorForm from "./ui/AddColorForm"
import ColorList from "./ui/ColorList"
import { addColor, rateColor, removeColor } from "../redux/actions"
import { findById, sortColors } from '../lib/array-helpers'
import ColorDetails from "./ui/ColorDetails"

export const NewColor = connect(
	null,
	dispatch =>
		({
			onNewColor(title, color) {
				dispatch(addColor(title, color))
			}
		})
)(AddColorForm)

export const Colors = connect(
	({ colors }, { match }) =>
		({
			colors: sortColors(colors, match.params.sort)
		}),
	dispatch =>
		({
			onRemove(id) {
				dispatch(removeColor(id))
			},
			onRate(id, rating) {
				dispatch(rateColor(id, rating))
			}
		})
)(ColorList)

export const Color = connect(
	({ colors }, { match }) => findById(colors, match.params.id)
)(ColorDetails)
