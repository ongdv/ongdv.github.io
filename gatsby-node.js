/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
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

  if (errors) {
    throw errors;
  }
  data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { html, frontmatter } = node;
    const { id, title, description, rate, language, repo } = frontmatter;
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
      component: path.resolve(`./src/pages/portfolio.js`)
    });
  });
};
