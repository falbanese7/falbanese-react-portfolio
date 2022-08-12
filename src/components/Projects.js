function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="justify-content-center">
        <h2>Featured Project</h2>
        <div>
          <figure className="featured-project">
            <a
              href="https://sitestash.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                id="featured-project-image"
                src="./assets/images/Screen Shot 2022-07-07 at 11.36.21 AM.png"
                alt="Screenshot of Sitestash Dashboard"
              />
              <figcaption id="featured-project-caption">Sitestash</figcaption>
            </a>
          </figure>
          <a
            href="https://github.com/falbanese7/sitestash"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <ul className="list-group custom-font">
            <li className="list-group-item">HTML5</li>
            <li className="list-group-item">CSS3</li>
            <li className="list-group-item">Bootstrap</li>
            <li className="list-group-item">JavaScript (ES6)</li>
            <li className="list-group-item">Node.js</li>
            <li className="list-group-item">Express.js</li>
            <li className="list-group-item">Express-session</li>
            <li className="list-group-item">Handlebars.js</li>
            <li className="list-group-item">Sequelize</li>
            <li className="list-group-item">connect-session-sequelize</li>
            <li className="list-group-item">dotenv</li>
            <li className="list-group-item">bcrypt</li>
            <li className="list-group-item">MySQL2</li>
            <li className="list-group-item">Passport</li>
          </ul>
        </div>
      </div>
      <h3>Additional Projects</h3>
      <figure className="additional-projects">
        <div>
          <a
            href="https://falbanese7.github.io/movie-refresh/"
            target="_blank"
            className="link-dark"
            rel="noreferrer"
          >
            <div className="align-center">
              <img
                id="additional-projects-image"
                src="./assets/images/167070744-1c5df8d4-aec1-4428-a92d-b1d1fb879794.png"
                alt="Screenshot of Movie Refresh application"
              />
              <figcaption id="additional-projects-caption">
                Movie Refresh
              </figcaption>
            </div>
          </a>
          <a
            href="https://github.com/falbanese7/fran-albanese-day-planner"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <ul className="list-group custom-font">
            <li className="list-group-item">HTML5</li>
            <li className="list-group-item">CSS3</li>
            <li className="list-group-item">Bulma</li>
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">YouTube Data API</li>
            <li className="list-group-item">The Movie Database API</li>
          </ul>
        </div>
        <div>
          <a
            href="https://fierce-temple-65595.herokuapp.com/"
            target="_blank"
            className="link-dark"
            rel="noreferrer"
          >
            <div className="align-center">
              <img
                id="additional-projects-image"
                src="./assets/images/Screen Shot 2022-06-07 at 2.58.31 AM.png"
                alt="Screenshot of Note Taker Application"
              />
              <figcaption id="additional-projects-caption">
                Note Taker
              </figcaption>
            </div>
          </a>
          <a
            href="https://github.com/falbanese7/falbanese7-note-taker-app"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <ul className="list-group custom-font">
            <li className="list-group-item">HTML5</li>
            <li className="list-group-item">CSS3</li>
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">NPM</li>
            <li className="list-group-item">Node.js</li>
            <li className="list-group-item">Express.js</li>
            <li className="list-group-item">Heroku</li>
            <li className="list-group-item">fs, util, and uuidv4 modules</li>
          </ul>
        </div>
        <div>
          <a
            href="https://falbanese7.github.io/fran-albanese-weather-dashboard/"
            target="_blank"
            className="link-dark"
            rel="noreferrer"
          >
            <div className="align-center">
              <img
                id="additional-projects-image"
                src="./assets/images/Screen Shot 2022-05-12 at 1.10.48 AM.png"
                alt="Screenshot of Weather Dashboard Application"
              />
              <figcaption id="additional-projects-caption">
                Weather Dashboard
              </figcaption>
            </div>
          </a>
          <a
            href="https://github.com/falbanese7/fran-albanese-weather-dashboard"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <ul className="list-group custom-font">
            <li className="list-group-item">HTML5</li>
            <li className="list-group-item">CSS3</li>
            <li className="list-group-item">Bootstrap</li>
            <li className="list-group-item">Google Fonts</li>
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">JQuery</li>
            <li className="list-group-item">Moment.js</li>
          </ul>
        </div>
      </figure>
    </section>
  );
}

export default Projects;
