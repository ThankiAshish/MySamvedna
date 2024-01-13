import { Link } from "react-router-dom";

const Donate = () => {
  return (
    <>
      <section className="donate">
        <h1>Donate</h1>
        <div className="container">
          <p>
            SAMVEDNA <strong>SERVE</strong> with <strong>SINCERITY</strong>{" "}
            giving <strong>SACRIFICE</strong> needs your{" "}
            <strong>SUPPORT</strong> which lead us to <strong>SUCCESS</strong>
          </p>
          <p>
            <span className="highlight">
              <strong>SAMVEDNA</strong> NEEDS
            </span>
            &nbsp;+&nbsp;<span className="highlight">AN EXPECTATION</span>
            &nbsp;=&nbsp;
            <span className="highlight">
              AN APPEAL for
              <strong>&nbsp;PERSONS WITH disABILITIES</strong>
            </span>
          </p>
          <p className="italic">
            &ldquo;Samvedna acknowledges the crucial support received from
            businesses, institutions, industrial units, corporations, and
            individuals in its mission to integrate and uplift people with
            disabilities. The organization highlights the collaborative efforts
            that have facilitated social welfare services, emphasizing the
            significance of both governmental and non-governmental
            contributions. Samvedna expresses gratitude to those who have
            generously supported their cause, recognizing the collective impact
            achieved through collaborative efforts for the socio-economic
            betterment of individuals with disabilities. The project emphasizes
            the importance of working together to create a more inclusive and
            supportive society.&rdquo;
          </p>
          <a className="btn" href="#donate-now">
            Donate Now
          </a>
        </div>
      </section>

      <div className="container">
        <section id="donate-now">
          <h1>
            Support <span className="highlight-text">Samvedna</span>
          </h1>
          <p>
            With an intention to continue the present as well as new upcoming
            events related to employment, self-employment & matrimonial which
            are the utmost basic need of “Persons with disABILITY Community” and
            simultaneously other social welfare related activities, programs,
            seminars etc. “SAMVEDNA” once again looks forward to its esteemed
            donors, patrons and genius person like you to be generous in lending
            support in the form of financial donation. You can donate by the
            following methods:
          </p>
          <ol>
            <Link></Link>
            <li className="donate-now-list-item flex-list">
              Secure Online Donation
              <Link to="https://www.payumoney.com/paybypayumoney/#/A5CFF1F49EB0F1000EFE26FF3757C90B">
                Donate
              </Link>
            </li>
            <li className="donate-now-list-item">
              Cheque or Demand Draft in favour of SAMVEDNA disABLED PERSONS
              SOCIAL WELFARE TRUST, VADODARA and send it at A/173, Silver Leaf
              Bungalows, Behind Bharat Petrol Pump, Nr. Revashray,
              Waghodia-Dabhoi Ring Road, Soma Talav Crossing, Vadodara -390 025
              (Gujarat) India.
            </li>
            <li className="donate-now-list-item">
              Direct NEFT/RTGS/IMPS bank transfer
            </li>
          </ol>
          <h2>BANK DETAILS</h2>
          <table>
            <tr>
              <td>Our Bank</td>
              <td>State Bank Of India</td>
            </tr>
            <tr>
              <td>Branch</td>
              <td>
                Nakshatra Building, Sangam Cross Road, Harni Road, Vadodara -
                390 018 (Gujarat) India.
              </td>
            </tr>
            <tr>
              <td>Branch Code</td>
              <td>04725</td>
            </tr>
            <tr>
              <td>Account no.</td>
              <td>31690284449</td>
            </tr>
            <tr>
              <td>IFSC code</td>
              <td>SBIN0004725</td>
            </tr>
          </table>
        </section>
      </div>
    </>
  );
};

export default Donate;
