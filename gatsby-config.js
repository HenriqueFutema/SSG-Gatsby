const config = {
  CONTENTFUL: {
    SPACE: '',
    TOKEN: '',
  },
}

module.exports = {
  siteMetadata: {
    title: `Gatsby Data Fetching Examples`,
    description: `Examples for data fetching at build time and runtime.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `Contentful`,
        fieldName: `contentful`,
        url: `https://graphql.contentful.com/content/v1/spaces/${config.CONTENTFUL.SPACE}/environments/master`,
        headers: {
          Authorization: `Bearer ${config.CONTENTFUL.TOKEN}`,
        },
      },
    },
  ],
}
