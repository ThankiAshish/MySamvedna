import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-content__left">
            <h2>Samvedna</h2>
            <p>
              <strong>Samvedna</strong> is a non-profit organization that aims
              to help people with disabilities.
            </p>
            <p>
              <strong>Samvedna</strong> is a registered trust under the{" "}
              <strong>Charity Commissioner, Vadodara, Gujarat, India</strong>.
            </p>
          </div>
          <div className="footer-content__right">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/donate" className="nav-link">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="nav-link">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2010 - {new Date().getFullYear()} <strong>Samvedna</strong>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
