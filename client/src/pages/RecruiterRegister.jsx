import { useState } from "react";

const checkboxItems = [
  { name: "core", value: "Core" },
  { name: "consulting", value: "Consulting" },
  { name: "management", value: "Management" },
  { name: "finance", value: "Finance" },
  { name: "psu", value: "PSU" },
  { name: "fmcg", value: "FMCG" },
  { name: "it", value: "IT" },
  { name: "others", value: "Others" },
];

const RecruiterRegister = () => {
  const [checkboxState, setCheckboxState] = useState(
    checkboxItems.reduce(
      (initial, item) => ({ ...initial, [item.name]: false }),
      {}
    )
  );

  const handleCheckboxChange = (event) => {
    setCheckboxState({
      ...checkboxState,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="container">
      <section className="recruiter-register">
        <h1>Recruiter&apos;s Register</h1>
        <form className="recruiter-register">
          <input
            type="text"
            name="company-name"
            id="company-name"
            placeholder="Enter Company Name"
            required
          />
          <input
            type="url"
            name="company-website"
            id="company-website"
            placeholder="Enter Your Website URL"
            required
          />
          <div className="checkbox-group">
            <label htmlFor="nature-of-business">Nature of Business:</label>
            {checkboxItems.map((item) => (
              <div key={item.name}>
                <input
                  type="checkbox"
                  name={item.name}
                  id={item.name}
                  value={item.value}
                  checked={checkboxState[item.name]}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={item.name}>{item.value}</label>
              </div>
            ))}
            <input
              type="text"
              name="other-business"
              id="other-business"
              placeholder="Specify Your Business"
              disabled={!checkboxState.others}
            />
          </div>
          <textarea
            name="address"
            id="address"
            cols="30"
            rows="10"
            placeholder="Enter Office Address (With City, State & Pincode)"
            required
          ></textarea>
          <input
            type="tel"
            name="fax"
            id="fax"
            placeholder="Enter Fax Number"
            required
          />
          <input
            type="text"
            name="area"
            id="area"
            placeholder="Enter Area"
            required
          />
          <input
            type="tel"
            name="landline"
            id="landline"
            placeholder="Enter Landline No."
            required
          />
          <input
            type="tel"
            name="mobile"
            id="mobile"
            placeholder="Enter Mobile No."
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter E-mail Address"
            required
          />
          <div className="input-row">
            <input
              type="text"
              name="employer-name"
              id="employer-name"
              placeholder="Enter Employer Name"
              required
            />
            <input
              type="tel"
              name="employer-mobile"
              id="employer-mobile"
              placeholder="Enter Employer Mobile No"
              required
            />
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              placeholder="Enter Company Description"
            ></textarea>
          </div>
        </form>
      </section>
    </div>
  );
};

export default RecruiterRegister;
