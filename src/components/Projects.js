import sitestashPic from '../assets/images/sitestash.png';
import movieRefreshPic from '../assets/images/movieRefresh.png';
import jate from '../assets/images/jate.png';
import weatherPic from '../assets/images/weatherDash.png';
import bookSearch from '../assets/images/booksearchengine.png';
import scheduler from '../assets/images/scheduler.png';

function Projects() {
  return (
    <section className="projects">
      <div className="justify-content-center">
        <h2>Featured Projects</h2>
        <div>
          <figure className="featured-project">
            <a
              href="https://sitestash.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                id="featured-project-image"
                src={sitestashPic}
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
      <div>
        <figure className="featured-project">
          <a
            href="https://falbanese7.github.io/movie-refresh/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              id="featured-project-image"
              src={movieRefreshPic}
              alt="Screenshot of Movie Refresh application"
            />
            <figcaption id="featured-project-caption">Movie Refresh</figcaption>
          </a>
        </figure>
        <a
          href="https://falbanese7.github.io/movie-refresh/"
          target="_blank"
          rel="noreferrer"
        >
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <ul className="list-group custom-font">
          <li className="list-group-item">HTML5</li>
          <li className="list-group-item">CSS3</li>
          <li className="list-group-item">Bulma</li>
          <li className="list-group-item">JavaScript (ES6)</li>
          <li className="list-group-item">RESTful API</li>
          <li className="list-group-item">YouTube Data API</li>
          <li className="list-group-item">The Movie Database API</li>
        </ul>
      </div>
      <h3>Additional Projects</h3>
      <figure className="additional-projects">
        <div>
          <a
            href="https://highwind-book-search.herokuapp.com/"
            target="_blank"
            className="link-dark"
            rel="noreferrer"
          >
            <div className="align-center">
              <img
                id="additional-projects-image"
                src={bookSearch}
                alt="Screenshot of book search engine"
              />
              <figcaption id="additional-projects-caption">
                Google Book Search Engine
              </figcaption>
            </div>
          </a>
          <a
            href="https://github.com/falbanese7/MERN-Highwind-Book-Search-Engine"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <ul className="list-group custom-font">
            <li className="list-group-item">JavaScript (ES6)</li>
            <li className="list-group-item">React.js</li>
            <li className="list-group-item">GraphQL</li>
            <li className="list-group-item">Apollo Server</li>
            <li className="list-group-item">Node.js</li>
            <li className="list-group-item">Express.js</li>
            <li className="list-group-item">MongoDB</li>
            <li className="list-group-item">Heroku</li>
          </ul>
        </div>
        <div>
          <a
            href="https://stark-oasis-36322.herokuapp.com/"
            target="_blank"
            className="link-dark"
            rel="noreferrer"
          >
            <div className="align-center">
              <img
                id="additional-projects-image"
                src={jate}
                alt="Screenshot of Jate text editor application"
              />
              <figcaption id="additional-projects-caption">
                J.A.T.E. Text Editor
              </figcaption>
            </div>
          </a>
          <a
            href="https://github.com/falbanese7/jate-text-editor-falbanese7"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <ul className="list-group custom-font">
            <li className="list-group-item">JavaScript (ES6)</li>
            <li className="list-group-item">PWA Methodology</li>
            <li className="list-group-item">Webpack</li>
            <li className="list-group-item">IndexedDB</li>
            <li className="list-group-item">Concurrently</li>
            <li className="list-group-item">Heroku</li>
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
                src={weatherPic}
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
            <li className="list-group-item">JavaScript (ES6)</li>
            <li className="list-group-item">JQuery</li>
            <li className="list-group-item">Moment.js</li>
          </ul>
        </div>
        <div>
          <a
            href="https://falbanese7.github.io/fran-albanese-day-planner/"
            target="_blank"
            className="link-dark"
            rel="noreferrer"
          >
            <div className="align-center">
              <img
                id="additional-projects-image"
                src={scheduler}
                alt="Screenshot of Work Day Scheduler application"
              />
              <figcaption id="additional-projects-caption">
                Work Day Scheduler
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
            <li className="list-group-item">JavaScript (ES6)</li>
            <li className="list-group-item">Moment.js</li>
            <li className="list-group-item">LocalStorage</li>
          </ul>
        </div>
      </figure>
    </section>
  );
}

export default Projects;
