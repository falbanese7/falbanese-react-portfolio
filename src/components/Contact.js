function Contact() {
  return (
    <div>
      {' '}
      <h1 className="welcome-header">Thanks for checking out my work!</h1>
      <h2 className="welcome-header">
        {' '}
        Feel free to get in touch with me below:{' '}
      </h2>
      <section class="contact">
        <div class="align-center">
          <ul>
            <li>
              <a
                href="mailto:falbanese96@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <ion-icon name="mail-outline"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/falbanese7"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/falbanese96"
                target="_blank"
                rel="noreferrer"
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/francescoalbanese_/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/francesco-albanese-jr"
                target="_blank"
                rel="noreferrer"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
      <script src="./assets/JavaScript/script.js"></script>
    </div>
  );
}

export default Contact;
