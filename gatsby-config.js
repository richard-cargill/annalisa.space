const { error } = require('dotenv').config();

// add in a check for production
// if (error) {
//   throw error;
// }

const { SPACE_ID, ACCESS_TOKEN } = process.env;

module.exports = {
  siteMetadata: {
    title: 'Annalisa Valente',
  },
  pathPrefix: `/annalisa.space`,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-favicon',
    'gatsby-plugin-react-next',
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
