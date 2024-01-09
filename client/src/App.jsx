import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./layouts/Main";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
