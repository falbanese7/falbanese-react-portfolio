import 'bootstrap/dist/js/bootstrap.js';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="https://falbanese7.github.io/francesco-albanese-portfolio/"
        >
          Francesco's Developer Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse nav justify-content-end"
          id="navbarScroll"
        >
          <ul className="nav justify-content-end navbar-nav my-2 my-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about-me"
                onClick={() => handlePageChange('Home')}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#projects"
                onClick={() => handlePageChange('Projects')}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#resume"
                onClick={() => handlePageChange('Resume')}
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact-me"
                onClick={() => handlePageChange('Contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
