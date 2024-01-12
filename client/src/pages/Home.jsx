import { useEffect } from "react";

import CustomCarousel from "./components/CustomCarousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const elements = document.querySelectorAll(".animate-on-scroll");

      elements.forEach(function (element) {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop <= window.innerHeight / 1.3) {
          element.classList.add("animate");
        }
      });
    });
  }, []);

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

      <div className="container">
        <section className="what-we-do">
          <h1>
            What <span className="highlight-text">We</span> Do?
          </h1>
          <div className="cards">
            <div className="card">
              <h2 className="highlight-text">INTENTION</h2>
              <p>
                <strong>Samvedna</strong> aims to redefine{" "}
                <strong>disABILITY</strong>, emphasizing abilities over
                limitations. The trust seeks to empower and integrate the
                challenged community, fostering hope and aspirations. The goal
                is to be heard, seen, and supported, advocating for a shift from
                disABILITY to undeniable potential.
              </p>
            </div>
            <div className="card">
              <h2 className="highlight-text">AIM</h2>
              <p>
                <strong>Samvedna</strong> strives to stand beside and empower
                physically challenged individuals, promoting independence
                through skill development. The trust focuses on integration and
                inclusion, emphasizing financial self-sufficiency for persons
                with <strong>disABILITIES.</strong>
              </p>
            </div>
            <div className="card">
              <h2 className="highlight-text">BELIEF</h2>
              <p>
                <strong>Samvedna</strong> believes in adding value by
                empowering, not just sympathizing. The trust rejects charity in
                favor of empowering through employment or self-employment. It
                recognizes the potential of the disabled to lead meaningful
                lives with proper care, training, and support.
              </p>
            </div>

            <div className="card">
              <h2 className="highlight-text">EXPECTATION</h2>
              <p>
                <strong>Samvedna</strong> urges equal opportunities for persons
                with <strong>disABILITIES</strong>, aligning with India&apos;s
                constitutional principles. It highlights the need for inclusive
                policies, services, and opportunities for the holistic
                development of this valuable human resource.
              </p>
            </div>
            <div className="card">
              <h2 className="highlight-text">VISION</h2>
              <p>
                The trust envisions a society where every individual contributes
                generously to those less privileged. Samvedna emphasizes
                empowerment by providing vocational skills, fostering
                self-reliance, and elevating the self-esteem of the disabled.
              </p>
            </div>
            <div className="card">
              <h2 className="highlight-text">MISSION</h2>
              <p>
                <strong>Mission Empowerment</strong> focuses on aiding skilled,
                semi-skilled, and unskilled persons with{" "}
                <strong>disABILITY</strong> in securing proper employment or
                self-employment. Samvedna acts as a bridge between the disabled
                community and suitable opportunities, considering their
                abilities.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="journey">
        <div className="container">
          <h1>
            Our <span className="highlight-text">Journey</span>
          </h1>
          <div className="counter-container">
            <div className="counter">
              <h2>6</h2>
              <p>States in India</p>
            </div>
            <div className="counter">
              <h2>1000</h2>
              <p>People</p>
            </div>
            <div className="counter">
              <h2>200</h2>
              <p>Jobs</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="goal">
          <h1>
            Our <span className="highlight-text">Goals</span>
          </h1>
          <ol className="goals" role="list">
            <li className="animate-on-scroll goal-list-item">
              To take measures for creating a Barrier-free environment.
            </li>
            <li className="animate-on-scroll goal-list-item">
              To assist in accessibility of Equal Opportunity and Protection of
              Rights, life, and inherent dignity.
            </li>
            <li className="animate-on-scroll goal-list-item">
              To contribute efforts in providing Employment/Placement related
              services.
            </li>
            <li className="animate-on-scroll goal-list-item">
              To contribute efforts for uplifting Social Status.
            </li>
            <li className="animate-on-scroll goal-list-item">
              To provide Technical or Vocational Training/skills for
              self-independence.
            </li>
            <li className="animate-on-scroll goal-list-item">
              To assist in marketing commodities and articles manufactured by
              disABLED persons.
            </li>
            <li className="animate-on-scroll goal-list-item">
              Arrange job work for skilled craftsman and artisan personnel to
              enable self-support.
            </li>
            <li className="animate-on-scroll goal-list-item">
              Bring together people who are maimed or deformed.
            </li>
            <li className="animate-on-scroll goal-list-item">
              Seek solutions to disABILITY through access to orthopedic
              services, surgery, aids, and appliances.
            </li>
            <li className="animate-on-scroll goal-list-item">
              Prevent members from leading secluded lives and involve them in
              social, cultural, and sporting activities/events.
            </li>
            <li className="animate-on-scroll goal-list-item">
              Promote cooperative ventures.
            </li>
            <li className="animate-on-scroll goal-list-item">
              Facilitate work-at-home projects like dressmaking, sewing,
              tailoring, art, and craft.
            </li>
            <li className="animate-on-scroll goal-list-item">
              Help poor and needy meritorious students by providing educational
              aids.
            </li>
            <li className="animate-on-scroll goal-list-item">
              Exhibit, market, and export handicrafts products made by
              differently-abled persons.
            </li>
          </ol>
        </section>
      </div>
    </>
  );
};

export default Home;
