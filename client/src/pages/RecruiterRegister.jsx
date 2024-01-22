import { useState } from "react";

const RecruiterRegister = () => {
  const [formData, setFormData] = useState({
    profilePicture: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    designation: "",
    contactNumber: "",
  });

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;

    if (files) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <div className="container">
      <section className="recruiters-register">
        <h1>
          <strong className="highlight-text">Recruiter</strong> Register
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Your Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Enter Your Company Name"
            value={formData.company}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="designation"
            id="designation"
            placeholder="Enter Your Designation"
            value={formData.designation}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="contactNumber"
            id="contactNumber"
            placeholder="Enter Your Contact Number"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="profilePicture">Profile Picture</label>
          <input
            type="file"
            name="profilePicture"
            id="profilePicture"
            accept="image/*"
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default RecruiterRegister;
