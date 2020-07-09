import React from 'react';
import { Link, graphql, navigateTo } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/card';

const IndexPage = (props) => {
  const { data, pathContext } = props;

  const {
    allMarkdownRemark: { edges }
  } = data;

  const handlePage = (path) => {
    console.log(path);
    navigateTo(path);
  };

  const list = edges.map(({ node }, idx) => {
    // console.log(node);
    return <Card {...node.frontmatter} handleClickCard={handlePage} />;
  });

  return (
    <div style={styles.container}>
      <SEO title="Home" />
      <Layout>{list}</Layout>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  body: {
    width: '70%',
    height: '80%',
    margin: '0 auto'
  }
};

export default IndexPage;
export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
            path
            type
          }
        }
      }
    }
  }
`;
