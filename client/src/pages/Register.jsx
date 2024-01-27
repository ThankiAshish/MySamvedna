import { Link, Navigate } from "react-router-dom";

import { SessionState } from "../context/SessionProvider";

const Register = () => {
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
			<section className="register-type-container">
				<div className="register-type">
					<h1>Are you Recruiter?</h1>
					<Link to="/recruiter-register">
						<button className="btn">Recruiter Register</button>
					</Link>
				</div>
				<div className="divider"></div>
				<div className="register-type">
					<h1>Are you a Job Seeker?</h1>
					<Link to="/job-seeker-register">
						<button className="btn btn-outline">
							Job Seeker Register
						</button>
					</Link>
				</div>
			</section>
		</>
	);
};

export default Register;
