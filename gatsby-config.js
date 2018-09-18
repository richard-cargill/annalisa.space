const { error } = require('dotenv').config();

if (error) {
  throw error;
}

const { SPACE_ID, ACCESS_TOKEN } = process.env;

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  pathPrefix: `/annalisa.space`,
  plugins: [
    'gatsby-plugin-react-helmet',
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
