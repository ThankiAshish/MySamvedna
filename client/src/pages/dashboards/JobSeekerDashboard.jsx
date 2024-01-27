import { Navigate } from "react-router-dom";
import { SessionState } from "../../context/SessionProvider";

const JobSeekerDashboard = () => {
  const { isLoggedIn, jobSeekerId } = SessionState();
  
  return (
    <>
    {!isLoggedIn && jobSeekerId === null ? (
        <Navigate to="/job-seeker-login" />
      ) : null}
    <div>JobSeekerDashboard</div>
    </>
  )
}

export default JobSeekerDashboard