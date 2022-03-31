import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import "../homepage.css";
import Footer from "../components/Footer";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div className='Login'>
			<Form onSubmit={handleSubmit}>
				<img className='loginLogo' src='assets/ProLoginBlk.png' alt=''></img>
				<Form.Group size='lg' controlId='email'>
					<Form.Label>Email</Form.Label>
					<Form.Control autoFocus type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
				</Form.Group>
				<Form.Group size='lg' controlId='password'>
					<Form.Label>Password</Form.Label>
					<Form.Control type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
				</Form.Group>
				<button block size='lg' type='submit' className='btn loginBtn' disabled={!validateForm()} onClick={() => navigate("/pro")}>
					** Sign Up or Login * Resu_Me Pro **
				</button>
			</Form>
			<Footer />
		</div>
	);
};

export default Login;
