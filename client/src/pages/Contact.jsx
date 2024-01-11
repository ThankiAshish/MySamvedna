import Tarulata from "../assets/images/Tarulata Patel.jpg";
import Mayank from "../assets/images/Mayank Patel.jpg";
import Sagar from "../assets/images/Sagar Patel.jpg";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <h1>Contact Information</h1>
        <p>
          We at <strong>SAMVEDNA</strong>, a social welfare trust for{" "}
          <strong>disABLED&nbsp;</strong>
          persons, welcome you to get in touch with us. Whether you have a
          query, suggestion, or wish to leave a review, your input is valuable
          to us.
        </p>
        <p>
          Your guidelines and reviews enhance our welfare services and help us
          serve better. Please feel free to contact or mail us.
        </p>
      </section>

      <section className="address-information">
        <h1>Office Address</h1>
        <div>
          <h3>Address:</h3>
          <p>
            20, GABBAR APARTMENT, OPP. AMBAJI TEMPLE, WATER TANK ROAD,
            KARELIBAUG, VADODARA - 390 018 GUJARAT, INDIA
          </p>
          <h3>Telephone:</h3>
          <p>(0265)&nbsp;-&nbsp;2489807</p>
          <h3>Email:</h3>
          <p>
            <a href="mailto:samvedna2010@yahoo.in" className="link">
              samvedna2010@yahoo.in
            </a>
            <br />
            <a href="mailto:samvednatrust2010@gmail.com" className="link">
              samvednatrust2010@gmail.com
            </a>
          </p>
        </div>
      </section>

      <section className="contact-persons">
        <h1>Contact Persons</h1>
        <div className="persons">
          <div className="person">
            <img src={Tarulata} alt="Tarulata Patel" />
            <h3>
              SMT. TARULATTA PATEL
              <span className="person-title">
                (Founder | Trustee | President)
              </span>
            </h3>
            <p>TEL: (0265) - 2489807</p>
          </div>
          <div className="person">
            <img src={Mayank} alt="Mayank Patel" />
            <h3>
              MAYANK PATEL
              <span className="person-title">(Trustee & Secretary)</span>
            </h3>
            <p>
              MOB:{" "}
              <a href="tel:+919898718766" className="link">
                +919898718766
              </a>
            </p>
          </div>
          <div className="person">
            <img src={Sagar} alt="Sagar Patel" />
            <h3>
              SAGAR PATEL<span className="person-title">(Co-Ordinator)</span>
            </h3>
            <p>
              MOB:{" "}
              <a href="tel:+919898608426" className="link">
                +919898608426
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <h1>Contact Form</h1>
        <form>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Full Name"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email Address"
            required
          />
          <input
            type="tel"
            id="contact"
            name="contact"
            placeholder="Enter Phone or Mobile No (with country code)"
            required
          />
          <textarea
            id="address"
            name="address"
            placeholder="Enter Address (with area, city, state, country, and pin code)"
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder="Enter Message"
            required
          />
          <button className="btn btn-full">Submit</button>
        </form>
      </section>
    </>
  );
};

export default Contact;
