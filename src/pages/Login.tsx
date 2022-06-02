import React from 'react';
import Titulo from '../components/Titulo';
import './Login.css';

export default function Login() {
  return(
	<>
		<Titulo />
		<div className="login-container">
			<div className="login-box">
			<h2>Login</h2>
			<form>				
				<div className="user-box">
					<input type="text" />
					<label>Usuario</label>		
				</div>
				<div className="user-box">
					<input type="password" />
					<label>Contraseña</label>
				</div>
				<a href="#">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Submit
				</a>
			</form>
			</div>
		</div>
	</>
  )
}
