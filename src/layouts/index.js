import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/Footer';
import TwoTest from '../components/react-two'

// import 'sanitize.css';
import './index.css';

const Layout = ({ children, data, match }) => {
  const title = data.site.siteMetadata.title;
  return (<div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <TwoTest type="svg" />
    <div className="container">
      <Header siteTitle={title} />
    </div>
    {children()}
    <Footer />
  </div>)
};

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
