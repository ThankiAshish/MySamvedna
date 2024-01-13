import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./layouts/Main";

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
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
