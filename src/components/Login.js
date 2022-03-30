import React, { useState } from "react";
<<<<<<< HEAD:src/pages/LoginPro.js
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

import "./Login.css";
=======
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
>>>>>>> parent of 9333eb3 (Login Lite and Pro coded and added to pages with route updates):src/components/Login.js


const Login = (props) => {
	const [formState, setFormState] = useState({ email: '', password: '' });
	const [login, { error }] = useMutation(LOGIN_USER);
  
	// update state based on form input changes
	const handleChange = (event) => {
	  const { name, value } = event.target;
  
	  setFormState({
		...formState,
		[name]: value,
	  });
	};
  
	// submit form
	const handleFormSubmit = async (event) => {
	  event.preventDefault();
  
	  try {
		const { data } = await login({
		  variables: { ...formState },
		});
  
		Auth.login(data.login.token);
	  } catch (e) {
		console.error(e);
	  }
  
	  // clear form values
	  setFormState({
		email: '',
		password: '',
	  });
	};

	return (
<<<<<<< HEAD:src/pages/LoginPro.js
		<main className="flex-row justify-center mb-4">
		  <div className="col-12 col-md-6">
			<div className="card">
			  <h4 className="card-header">Login</h4>
			  <div className="card-body">
				<form onSubmit={handleFormSubmit}>
				  <input
					className="form-input"
					placeholder="Your email"
					name="email"
					type="email"
					id="email"
					value={formState.email}
					onChange={handleChange}
				  />
				  <input
					className="form-input"
					placeholder="******"
					name="password"
					type="password"
					id="password"
					value={formState.password}
					onChange={handleChange}
				  />
				  <button className="btn d-block w-100" type="submit">
					Submit
				  </button>
				</form>
	
				{error && <div>Login failed</div>}
			  </div>
			</div>
		  </div>
		</main>
	  );
	};
	
	export default Login;
=======
		<div className='Login'>
			<Form onSubmit={handleSubmit}>
				<Form.Group size='lg' controlId='email'>
					<Form.Label>Email</Form.Label>
					<Form.Control autoFocus type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
				</Form.Group>
				<Form.Group size='lg' controlId='password'>
					<Form.Label>Password</Form.Label>
					<Form.Control type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
				</Form.Group>
				<Button block size='lg' type='submit' disabled={!validateForm()}>
					Login
				</Button>
			</Form>
		</div>
	);
}
>>>>>>> parent of 9333eb3 (Login Lite and Pro coded and added to pages with route updates):src/components/Login.js
