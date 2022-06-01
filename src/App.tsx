import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  //const { user } = useUser();
  
  
  return (
	<div id="routers">
		<Router>
			<>	
				<Routes>					
          <Route path='/welcome' element={<Home/>} />
				</Routes>
			</>
			: <Login />
		</Router>
	</div>
  );
}


export default App;