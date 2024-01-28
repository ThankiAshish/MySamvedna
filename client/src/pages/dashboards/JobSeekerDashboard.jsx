import { Navigate } from "react-router-dom";
import { SessionState } from "../../context/SessionProvider";

const JobSeekerDashboard = () => {
  const { isLoggedIn, jobSeekerId, isLoading } = SessionState();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {!isLoggedIn || jobSeekerId === null ? (
        <Navigate to="/job-seeker-login" />
      ) : null}
      <div>JobSeekerDashboard</div>
    </>
  );
};

export default JobSeekerDashboard;
