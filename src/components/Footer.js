import React from 'react';
import Link from 'gatsby-link';

const Footer = () => (
  <footer aria-label='Footer'>
    <h3>Get in touch</h3>
    <p>Have any suggestion or itnerested in working together on a project?</p>
    <p>Go ahead, I'd love to connect with you.</p>
    <a href='mailto:random@random.com'>Send an email</a>

    <ul>
      <li>
        <Link to='/about/'>About me</Link>
      </li>
      <li>
        <Link to='/'>Dribble</Link>
      </li>
      <li>
        <Link to='/'>LinkedIn</Link>
      </li>
      <li>
        <Link to='/'>Medium</Link>
      </li>
    </ul>

    <span>&copy;2018 - Copyright</span>
  </footer>
);

export default Footer;
