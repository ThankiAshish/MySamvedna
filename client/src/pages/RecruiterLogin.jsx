import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import { SessionContext } from "../context/SessionProvider";

const RecruiterLogin = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [session, setSession] = useContext(SessionContext);

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const data = new FormData();
		data.append("email", formData.email);
		data.append("password", formData.password);

		try {
			const response = await fetch(
				"http://localhost/MySamvedna/api/controllers/recruiterLogin.php",
				{
					method: "POST",
					body: data,
					credentials: "include",
				}
			);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const responseData = await response.json();

			if (responseData.success) {
				localStorage.setItem("authToken", responseData.token);
				localStorage.setItem("userType", "recruiter");
				setSession({
					isLoggedIn: true,
					token: responseData.token,
				});
				toast.success(responseData.message);
			} else {
				toast.error(responseData.message);
			}
		} catch (error) {
			console.error(error);
			toast.error("An error occurred: " + error.message);
		}
	};

	return (
		<>
      {session.isLoggedIn && <Navigate to="/recruiter-dashboard" />}
			<div className="container">
				<section className="recruiters-login">
					<h1>Recruiter&apos;s Login</h1>
					<form className="login-form" onSubmit={handleSubmit}>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Enter Your Email Address"
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Enter Your Password"
							value={formData.password}
							onChange={handleChange}
							required
						/>
						<button
							className="btn btn-full"
							name="recruiterLoginButton"
						>
							Login
						</button>
						<Link
							to="/recruiter/forgot-password"
							className="forgot-password"
						>
							Forgot Password?
						</Link>
					</form>
				</section>
			</div>
		</>
	);
};

export default RecruiterLogin;
