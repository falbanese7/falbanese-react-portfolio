import 'bootstrap/dist/css/bootstrap.css';
import profilePic from '../assets/images/mt-major.jpg';
import Welcome from './Welcome';

function About() {
  return (
    <section>
      <section>
        <h1 className="welcome-header">{Welcome()}</h1>
        <div className="d-flex justify-content-center">
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
              My name is Francesco Albanese. I'm a quality assurance engineer
              with experience in software development. Lover of eating, video
              games, hiking, snowboarding, and my soon to be wife, Emily. I
              graduated from Emmanuel College in Boston in 2018 with a
              Bacheleor's Degree in Business Management and a concentration in
              markeitng. Since then, I've been at Promoboxx, a Boston-based
              marketing SaaS platform connecting national brands with their
              independent retailers. I began as an intern, leveled-up to
              specialist, and finally to manager of the customer support team in
              my first two years. In late 2021 to early 2022, I began exploring
              a love of technology and development and began my studies with the
              University of New Hampshire's Coding Bootcamp. In parallel, I made
              the transition from the customer support manager to QA Engineer.
              In September 2022, I completed the coding bootcamp. As of
              Februrary 2024, I began my role as Senior QA Engineer. Thanks for
              checking out my work!
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;
