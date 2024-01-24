import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./layouts/Main";
import Recruiter from "./layouts/Recruiter";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Login from "./pages/Login";
import RecruiterLogin from "./pages/RecruiterLogin";
import JobSeekerLogin from "./pages/JobSeekerLogin";
import Register from "./pages/Register";
import RecruiterRegister from "./pages/RecruiterRegister";
import JobSeekerRegister from "./pages/JobSeekerRegister";
import SelfEmploymentRegister from "./pages/SelfEmploymentRegister";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import ViewJobs from "./pages/ViewJobs";
import ViewApplications from "./pages/ViewApplications";
import PostJob from "./pages/PostJob";
import Search from "./pages/Search";

import NotFound from "./pages/404";
// import ViewApplication from "./pages/ViewApplication";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recruiter-login" element={<RecruiterLogin />} />
          <Route path="/seeker-login" element={<JobSeekerLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recruiter-register" element={<RecruiterRegister />} />
          <Route path="/seeker-register" element={<JobSeekerRegister />} />
          <Route path="/self-employment" element={<SelfEmploymentRegister />} />
          <Route path="/search" element={<Search />} />
        </Route>
        <Route path="recruiter-dashboard" element={<Recruiter />}>
          <Route index element={<RecruiterDashboard />} />
          <Route path="view-jobs" element={<ViewJobs />} />
          <Route path="view-applications" element={<ViewApplications />} />
          {/* <Route path="view-application" element={<ViewApplication />} /> */}
          <Route path="post-job" element={<PostJob />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
