import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Color, NewColor, Colors } from './components/containers'
import Whoops404 from './components/ui/Whoops404'
import Menu from './components/ui/Menu'
import './stylesheets/APP.scss'

const App = () =>
	<Switch>
		<Route exact path="/:id" component={Color} />
		<Route path="/"
			component={() => (
				<div className="app">
					<Route component={Menu} />
					<NewColor />
					<Switch>
						<Route exact path="/" component={Colors} />
						<Route path="/sort/:sort" component={Colors} />
						<Route component={Whoops404} />
					</Switch>
				</div>
			)} />
	</Switch>

export default App