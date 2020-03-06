import React from 'react'
import './stylesheets/APP.scss'
import { Menu, NewColor, Colors } from './components/containers'

const App = () =>
	<div className="app">
		<Menu />
		<NewColor />
		<Colors />
	</div>


export default App