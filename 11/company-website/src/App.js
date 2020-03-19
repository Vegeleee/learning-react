import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Home, Whoops404, Events, Products, Contact, About } from './components/pages'

const App = () => {
	return (
		<HashRouter>
			<div className="main">
				<Switch>
					<Route exact path="/" component={Home} />
					<Redirect from="/history" to="/about/history" />
					<Redirect from="/services" to="/about/services" />
					<Redirect from="/location" to="/about/location" />
					<Route path="/about" component={About} />
					<Route path="/events" component={Events} />
					<Route path="/products" component={Products} />
					<Route path="/contact" component={Contact} />
					<Route component={Whoops404} />
				</Switch>

			</div>
		</HashRouter>
	)
}

export default App
