import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <footer className="footer" aria-label="Footer">
    <div className="container">
      <h6>Say hi!</h6>
      <p className="footer__content">
        Have any suggestion or interested in working together on a project?
        <br />
        Go ahead, I'd love to connect with you.
      </p>

      <a className="button" href="mailto:annalisavalente@pm.me">
        Send me an email
      </a>

      <ul className="links">
        <li>
           <a
            className="link__a"
            title="External link to Trello"
            target="_blank"
            href="https://trello.com/annalisa_valente"
          >
            Trello
          </a>
        </li>
        <li>
          <a
            className="link__a"
            title="External link to Dribbble"
            target="_blank"
            href="https://dribbble.com/annalisa_valente"
          >
            Dribbble
          </a>
        </li>
        <li>
          <a
            className="link__a"
            title="External link to LinkedIn"
            target="_blank"
            href="https://www.linkedin.com/in/annalisavalente/"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className="link__a"
            title="External link to Twitter"
            target="_blank"
            href="https://twitter.com/d_art_h_vader"
          >
            Twitter
          </a>
        </li>
      </ul>

      <span className="footer__content">
        &copy;
        {new Date().getFullYear()} Made with ❤ by A.Valente & R.Cargill
      </span>
    </div>
  </footer>
)

export default Footer
