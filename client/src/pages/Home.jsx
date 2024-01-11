import CustomCarousel from "./components/CustomCarousel";

const Home = () => {
  return (
    <>
      <CustomCarousel />
      <div className="container">
        <section className="slogan">
          <h1>
            What is <strong>&ldquo;Samvedna&rdquo;?</strong>
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

        <section className="what-are-we">
          <h1>
            What we are as a <br /> &ldquo;SAMVEDNA TRUST&rdquo;
          </h1>
          <p>
            On 26th March, 2010 “SAMVEDNA” came into existence having Regd. No.
            E/7338/Vadodara of Charity Commissioner, Vadodara, Gujarat, India
          </p>
        </section>
      </div>
    </>
  );
};

export default Home;
