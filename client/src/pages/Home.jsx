import CustomCarousel from "./components/CustomCarousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <>
      <CustomCarousel />
      <div className="container">
        <section className="main-slogan">
          <h1>
            What is <strong className="highlight-text">Samvedna?</strong>
          </h1>
          <p>
            <strong>&ldquo;SAMVEDNA&rdquo;</strong>, i.e., a
            <strong>&ldquo;sensation&rdquo;</strong>, is a call for empathy and
            support. It&apos;s a voice saying:
          </p>
          <p className="italic">
            &ldquo;Stand with me, build me up, don&apos;t tear me down. Support
            me and our efforts, don&apos;t trash me and our efforts. Guide me,
            don&apos;t mislead me. Be our friend, not our enemy. Love me,
            don&apos;t just like me. Hold me, don&apos;t just touch me. Receive
            me, don&apos;t reject me. Walk with me, don&apos;t walk away from
            me. Stand with me... Stand with me!&rdquo;
          </p>
          <p>
            Yes, this is the <strong>&ldquo;SAMVEDNA&rdquo;</strong> (sensation)
            of a &ldquo;Person with Disability&rdquo;.
          </p>
          <p>
            I am a man on a mission whose <strong>disABILITY</strong>{" "}
            hasn&apos;t won.
          </p>
        </section>
      </div>

      <section className="what-are-we">
        <div className="container">
          <h1>
            What <span>we</span> are as a <br />{" "}
            <span className="highlight-text">SAMVEDNA TRUST</span>
          </h1>
          <p>
            On 26th March, 2010 <strong>“SAMVEDNA”</strong> came into existence
            having{" "}
            <strong>
              Regd. No. E/7338/Vadodara of Charity Commissioner, Vadodara,
              Gujarat, India
            </strong>
          </p>
          <p>
            <strong>“SAMVEDNA”</strong> Ideology is based on five “Ss”
          </p>
          <p className="highlight italic">
            SERVICE <FontAwesomeIcon icon="circle" className="dot-icon" />{" "}
            SINCERITY <FontAwesomeIcon icon="circle" className="dot-icon" />{" "}
            SACRIFICE <FontAwesomeIcon icon="circle" className="dot-icon" />{" "}
            SUPPORT <FontAwesomeIcon icon="circle" className="dot-icon" />{" "}
            SUCCESS
          </p>
          <p>
            <strong>“SAMVEDNA”</strong> is contributing efforts and devoting
            services, dedicated towards improving the standard of living of
            <strong>“PERSONS WITH disABILITY”</strong> of OUR INDIAN SOCIETY by
            assisting them to live life with Honour, Respect and inherent
            dignity.
          </p>
          <p>
            The main Object and aspect of <strong>“SAMVEDNA”</strong> is to
            contribute efforts for creating sources and searching areas for
            employment, create resources for self employment and marketing hand
            made commodities / articles of self employed{" "}
            <strong>“Persons with disABILITY”</strong> and thereby enable them
            generate Source of Income to establish their life.
          </p>
        </div>
      </section>

      <section className="understand-disability">
        <div className="container">
          <h1>
            Let&apos;s Understand{" "}
            <span className="highlight-text">disABILITY</span>
          </h1>
          <div className="slogan">
            <div className="images"></div>
            <p>
              One having certain Physical impairment/disorder, results in
              his/her ability to perform/interact particular action due to
              attitudinal and environmental barriers, which he/she perform with
              different ability, that too in a different manner, as such, it
              will be best to call him/her as{" "}
              <strong>“DIFFERENTLY ABLE BODY”.</strong> It is well said that
              <strong>“Count their ABILITIES but not disABILITIES”</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
