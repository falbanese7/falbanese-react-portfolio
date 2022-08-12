import 'bootstrap/dist/css/bootstrap.css';
import profilePic from '../assets/images/Updated.jpg';

function About() {
  return (
    <main>
      <section>
        <h1 className="welcome-header">Welcome to my portfolio!</h1>
        <div className="hotdog d-flex justify-content-center">
          <img id="profile-image" src={profilePic} alt="Fran with hotdog" />
        </div>
      </section>
      {/* <!-- About Me --> */}
      <section className="about container" id="about-me">
        <div className="row">
          <div className="col-md align-items-center section-headers">
            <h2>About Me</h2>
          </div>
          <div className="col-md d-flex align-items-center left-borders">
            <p>
              My name is Francesco Albanese. I'm an aspiring software developer.
              Here you'll find a little background about me, my projects, and
              how to contact me. I'm a big fan of eating, playing video games,
              hiking, snowboarding, and more than I can't immdiately think of.{' '}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
