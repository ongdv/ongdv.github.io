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
              title
              path
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
    createPage({
      path: `/post/${String(node.frontmatter.path)}`,
      context: {
        html: node.html,
        title: node.frontmatter.title
      },
      component: path.resolve(`./src/pages/post.js`)
    });
  });

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/ddd/${String(node.frontmatter.path)}`,
      context: {
        html: node.html
      },
      component: path.resolve(`./src/pages/ddd.js`)
    });
  });
};
