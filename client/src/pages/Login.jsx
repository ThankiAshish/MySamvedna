import { Link, Navigate } from "react-router-dom";

import { SessionState } from "../context/SessionProvider";

const Login = () => {
	const { isLoggedIn, recruiterId, selfEmployedId, jobSeekerId } =
		SessionState();

	return (
		<>
			{isLoggedIn ? (
				<>
					{recruiterId ? (
						<Navigate to="/recruiter-dashboard" />
					) : null}
					{jobSeekerId ? (
						<Navigate to="/job-seeker-dashboard" />
					) : null}
					{selfEmployedId ? (
						<Navigate to="/self-employed-dashboard" />
					) : null}
				</>
			) : null}
			<section className="login-type-container">
				<div className="login-type">
					<h1>Are you Recruiter?</h1>
					<Link to="/recruiter-login">
						<button className="btn">Recruiter Login</button>
					</Link>
				</div>
				<div className="divider"></div>
				<div className="login-type">
					<h1>Are you a Job Seeker?</h1>
					<Link to="/job-seeker-login">
						<button className="btn btn-outline">
							Job Seeker Login
						</button>
					</Link>
				</div>
			</section>
		</>
	);
};

export default Login;
