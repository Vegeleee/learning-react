import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {
	getChildContext() {
		return {
			store: this.props.store
		}
	}

	componentDidMount() {
		this.unsubscribe = store.subscribe(
			() => this.forceUpdate()
		)
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

	render() {
		return (
			<div className="app">

			</div>
		)
	}
}

App.propTypes = {
	store: PropTypes.object.isRequired
}

App.childContextTypes = {
	store: PropTypes.object.isRequired
}

export default App