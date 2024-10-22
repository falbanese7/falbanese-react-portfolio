import 'bootstrap/dist/css/bootstrap.css';
import profilePic from '../assets/images/mt-major.jpg';

function About() {
  return (
    <section>
      <section>
        <h1 className="welcome-header">Welcome to my portfolio!</h1>
        <div className="hotdog d-flex justify-content-center">
          <img id="profile-image" src={profilePic} alt="pic of Fran" />
        </div>
      </section>
      {/* <!-- About Me --> */}
      <section className="about container">
        <div className="row">
          <div className="col-md align-items-center section-headers">
            <h2>About Me</h2>
          </div>
          <div className="col-md d-flex align-items-center left-borders">
            <p>
              My name is Francesco Albanese. I'm an aspiring software developer.
              I'm a big fan of eating, playing video games, hiking,
              snowboarding, and much more than I can't immdiately think of. I
              graduated from Emmanuel College in Boston in 2018 with a
              Bacheleor's Degree in Business Management and a concentration in
              markeitng. Since graduating, I've been at Promoboxx, a
              Boston-based marketing SaaS platform connecting national brands
              with their independent retailers. I went from intern, to
              specialist, to manager of the customer support team in my first
              two years. In late 2021 to early 2022, I decided it was time for a
              change and wanted to explore my interest in software development.
              So I made the transition from the customer support team to the
              software engineering team as a QA Analyst. In March of 2022, I
              began my studies with the University of New Hampshire's Coding
              Bootcamp which I aniticpate to complete the bootcamp by September
              2022. Thanks for checking out my work!
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;
