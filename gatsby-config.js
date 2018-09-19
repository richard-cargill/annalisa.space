const { error } = require('dotenv').config();

// add in a check for production
// if (error) {
//   throw error;
// }

const { SPACE_ID, ACCESS_TOKEN } = process.env;

module.exports = {
  siteMetadata: {
    title: 'Site logo',
  },
  pathPrefix: `/annalisa.space`,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: SPACE_ID,
        accessToken: ACCESS_TOKEN
      }
    },
    'gatsby-transformer-remark'
  ]
}
