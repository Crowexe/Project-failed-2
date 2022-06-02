import React from 'react';
import Titulo from '../components/Titulo';
import './Login.css';

export default function Login() {
  return(
	<>
		<Titulo />
		<div className="login-container">
			<div className="login-box">
			<img className="user-avatar" src="https://i.imgur.com/lV8Y7L1.png" alt="user profile image" />
			<h2>INICIA SESIÓN</h2>
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
					log in
				</a>
			</form>
			</div>
		</div>
	</>
  )
}
