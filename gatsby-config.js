module.exports = {
  siteMetadata: {
    title: `bcsPay`,
    author: `Jacob Stordahl`,
    description: `Pay for your Black Cat Services`,
    siteUrl: `https://pay.blkcatstudio.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/items`,
        name: `items`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ``,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bcsPay`,
        short_name: `bcsPay`,
        start_url: `/`,
        background_color: `bg`,
        theme_color: `darkBlue`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        //replace with own Snipcart API key
        apiKey: 'MGNjODc0NDYtZDQ2OC00Zjk0LWI1MTktYmNmMTgxM2M5YzVmNjM3MzQxOTA2ODY1NTg0OTY1',
        autopop: true,
        }
    },
    `gatsby-plugin-styled-components`,
  ],
}
