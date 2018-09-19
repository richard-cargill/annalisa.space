import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/Footer';

const Layout = ({ children, data }) => {
  const title = data.site.siteMetadata.title;
  return (<div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={title} />
    <main>
      {children()}
    </main>
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
    allContentfulPage {
      edges {
        node {
          name
        }
      }
    }
  }
`;
