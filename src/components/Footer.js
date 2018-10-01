import React from 'react';
import Link from 'gatsby-link';

const Footer = () => (
  <footer className="footer" aria-label='Footer'>
    <div className="container">
      <h6>GET IN TOUCH</h6>
      <p className="footer__content">Have any suggestion or itnerested in working together on a project? <br/>
      Go ahead, I'd love to connect with you.</p>

      <a className="button" href='mailto:random@random.com'>Send me an email</a>

      <ul className="links">
        <li>
          <Link className='link__a' to='/about/'>About me</Link>
        </li>
        <li>
          <Link className='link__a' to='/'>Dribbble</Link>
        </li>
        <li>
          <Link className='link__a' to='/'>LinkedIn</Link>
        </li>
        <li>
          <Link className='link__a' to='/'>Medium</Link>
        </li>
      </ul>

      <span className="footer__content">&copy; 2018 - Copyright</span>
    </div>
  </footer>
);

export default Footer;
