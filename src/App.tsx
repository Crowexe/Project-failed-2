import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import ReactDOM from 'react-dom';

const App = () => {
  //const { user } = useUser();
  
  
  return (
	<div id="routers">
		<Router>
			<Login />
		</Router>
	</div>
  );
}

export default App;


if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}