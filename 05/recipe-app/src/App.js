import React from 'react';
import Menu from "./components/Menu";
import './App.css';


const App = ({ data }) =>
	<Menu recipes={data} />

export default App;