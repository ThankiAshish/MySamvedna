import { useState } from "react";

const RecruiterRegister = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    natureOfBusiness: "",
    address: "",
    fax: "",
    areaCode: "",
    landline: "",
    mobile: "",
    email: "",
    employerName: "",
    companyDescription: "",
    jobDesignation: "",
    dutyDescription: "",
    essentialQualification: {
      essential: "",
      desirable: "",
    },
    ageLimit: "",
    womenEligible: false,
    workingHours: {
      from: "",
      to: "",
    },
    vacancies: {
      regular: 0,
      temporary: 0,
    },
    payAndAllowances: "",
    placeOfWork: "",
    resumesToBeSent: "Online",
    resumeEmail: "",
    interviewDetails: {
      date: "",
      time: "",
      aptitudeTest: false,
      technicalTest: false,
      groupDiscussion: false,
      personalInterview: false,
      topics: "",
      contactPerson: "",
    },
    disabilityInfo: {
      type: "",
      percentage: "",
      aidOrAppliance: "",
    },
    ownVehiclePreferred: false,
    conveyanceProvided: false,
    conveyanceType: "",
    otherInformation: "",
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const propertyArray = name.split(".");

    setFormData((prevData) => {
      let updatedData = { ...prevData };

      let currentLevel = updatedData;
      for (let i = 0; i < propertyArray.length - 1; i++) {
        currentLevel = currentLevel[propertyArray[i]];
      }

      if (type === "checkbox") {
        currentLevel[propertyArray[propertyArray.length - 1]] = checked;
      } else {
        currentLevel[propertyArray[propertyArray.length - 1]] = value;
      }

      return updatedData;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container">
      <section className="recruiter-register">
        <h1>
          <strong className="highlight-text">Recruiter</strong> Register
        </h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Company Information</legend>
            <input
              type="text"
              name="companyName"
              placeholder="Name of the Company"
              value={formData.companyName}
              onChange={handleInputChange}
              required
            />

            <input
              type="text"
              name="website"
              placeholder="Website"
              value={formData.website}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="natureOfBusiness"
              placeholder="Nature of Business"
              value={formData.natureOfBusiness}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="address"
              placeholder="Address in full"
              value={formData.address}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="fax"
              placeholder="Fax"
              value={formData.fax}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="areaCode"
              placeholder="Area Code"
              value={formData.areaCode}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="landline"
              placeholder="Land Line no."
              value={formData.landline}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mob no."
              value={formData.mobile}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="email"
              placeholder="E-Mail Address"
              value={formData.email}
              onChange={handleInputChange}
            />
          </fieldset>

          <fieldset>
            <legend>Employer Information</legend>
            <input
              type="text"
              name="employerName"
              placeholder="Name of Employer"
              value={formData.employerName}
              onChange={handleInputChange}
            />

            <textarea
              name="companyDescription"
              placeholder="Company Description"
              value={formData.companyDescription}
              onChange={handleInputChange}
            />
          </fieldset>

          <fieldset>
            <legend>Job Information</legend>
            <input
              type="text"
              name="jobDesignation"
              placeholder="Job designation offered"
              value={formData.jobDesignation}
              onChange={handleInputChange}
            />

            <textarea
              name="dutyDescription"
              placeholder="Description of duty"
              value={formData.dutyDescription}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="essentialQualification.essential"
              placeholder="Required Essential qualification (Essential)"
              value={formData.essentialQualification?.essential || ""}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="essentialQualification.desirable"
              placeholder="Required Desirable qualification (Desirable)"
              value={formData.essentialQualification?.desirable || ""}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="ageLimit"
              placeholder="Age limit"
              value={formData.ageLimit}
              onChange={handleInputChange}
            />

            <div className="input-group">
              <input
                type="checkbox"
                name="womenEligible"
                checked={formData.womenEligible}
                onChange={handleInputChange}
              />
              <label htmlFor="womenEligible">Whether Women Are Eligible?</label>
            </div>

            <input
              type="text"
              name="workingHours.from"
              placeholder="Working Hours From"
              value={formData.workingHours.from}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="workingHours.to"
              placeholder="To"
              value={formData.workingHours.to}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="vacancies.regular"
              placeholder="Number of Vacancies (Regular)"
              value={formData.vacancies?.regular || ""}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="vacancies.temporary"
              placeholder="Number of Vacancies (Temporary)"
              value={formData.vacancies?.temporary || ""}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="payAndAllowances"
              placeholder="Pay and Allowances"
              value={formData.payAndAllowances}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="placeOfWork"
              placeholder="Place of work"
              value={formData.placeOfWork}
              onChange={handleInputChange}
            />

            <select
              name="resumesToBeSent"
              value={formData.resumesToBeSent}
              onChange={handleInputChange}
            >
              <option value="Online">Online</option>
              <option value="Hardcopy">Hardcopy</option>
            </select>

            <input
              type="text"
              name="resumeEmail"
              placeholder="If online, the email id to which the resume be sent"
              value={formData.resumeEmail}
              onChange={handleInputChange}
            />
          </fieldset>

          <fieldset>
            <legend>Interview Details</legend>
            <input
              type="date"
              name="interviewDetails.date"
              placeholder="Date of Interview/Test of Applicant/s"
              value={formData.interviewDetails.date}
              onChange={handleInputChange}
            />

            <input
              type="time"
              format=""
              name="interviewDetails.time"
              placeholder="Time"
              value={formData.interviewDetails.time}
              onChange={handleInputChange}
            />
            <div className="input-group">
              <input
                type="checkbox"
                name="interviewDetails.aptitudeTest"
                checked={formData.interviewDetails.aptitudeTest}
                onChange={handleInputChange}
              />
              <label htmlFor="interviewDetails.aptitudeTest">
                Aptitude Test
              </label>

              <input
                type="checkbox"
                name="interviewDetails.technicalTest"
                checked={formData.interviewDetails.technicalTest}
                onChange={handleInputChange}
              />
              <label htmlFor="interviewDetails.technicalTest">
                Technical Test
              </label>

              <input
                type="checkbox"
                name="interviewDetails.groupDiscussion"
                checked={formData.interviewDetails.groupDiscussion}
                onChange={handleInputChange}
              />
              <label htmlFor="interviewDetails.groupDiscussion">
                Group Discussion
              </label>

              <input
                type="checkbox"
                name="interviewDetails.personalInterview"
                checked={formData.interviewDetails.personalInterview}
                onChange={handleInputChange}
              />
              <label htmlFor="interviewDetails.personalInterview">
                Personal Interview
              </label>
            </div>

            <input
              type="text"
              name="interviewDetails.topics"
              placeholder="If yes, please specify likely topics/skill sets"
              value={formData.interviewDetails.topics}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="interviewDetails.contactPerson"
              placeholder="Contact person to whom to report"
              value={formData.interviewDetails.contactPerson}
              onChange={handleInputChange}
            />
          </fieldset>

          <fieldset>
            <legend>Disability Information</legend>
            <input
              type="text"
              name="disabilityInfo.type"
              placeholder="Type of Person with disability"
              value={formData.disabilityInfo.type}
              onChange={handleInputChange}
            />

            <select
              name="disabilityInfo.percentage"
              value={formData.disabilityInfo.percentage}
              onChange={handleInputChange}
            >
              <option value="40-50">40-50</option>
              <option value="50-60">50-60</option>
              <option value="60-70">60-70</option>
              <option value="70-80">70-80</option>
              <option value="80-90">80-90</option>
              <option value="90-100">90-100</option>
            </select>

            <input
              type="text"
              name="disabilityInfo.aidOrAppliance"
              placeholder="As per nature of Job, aid or appliance using applicant will serve the need"
              value={formData.disabilityInfo.aidOrAppliance}
              onChange={handleInputChange}
            />

            <div className="input-group">
              <input
                type="checkbox"
                name="ownVehiclePreferred"
                checked={formData.ownVehiclePreferred}
                onChange={handleInputChange}
              />
              <label htmlFor="ownVehiclePreferred">
                Whether own vehicle preferred
              </label>

              <input
                type="checkbox"
                name="conveyanceProvided"
                checked={formData.conveyanceProvided}
                onChange={handleInputChange}
              />
              <label htmlFor="conveyanceProvided">
                Whether conveyance provided
              </label>
            </div>

            <input
              type="text"
              name="conveyanceType"
              placeholder="If yes what type"
              value={formData.conveyanceType}
              onChange={handleInputChange}
            />

            <textarea
              name="otherInformation"
              placeholder="Any other information"
              value={formData.otherInformation}
              onChange={handleInputChange}
            />
          </fieldset>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default RecruiterRegister;
