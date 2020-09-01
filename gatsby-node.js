/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const request = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              id
              title
              description
              rate
              language
              repo
            }
          }
        }
      }
    }
  `);

  const { data, errors } = request;
  console.log(JSON.stringify(data, null, 4));
  if (errors) {
    console.log('Error Throwing');
    throw errors;
  }
  data.allMarkdownRemark.edges.map(({ node }) => {
    const { html, frontmatter } = node;
    const { id, title, description, rate, language, repo } = frontmatter;
    console.log(JSON.stringify(node, null, 4));
    createPage({
      path: `/portfolio/${String(id)}`,
      context: {
        id: id,
        html: html,
        title: title,
        description: description,
        rate: rate,
        language: language,
        repo: repo
      },
      component: path.resolve(`src/pages/portfolio.js`)
    });
  });
};
