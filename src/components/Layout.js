/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';
import Footer from './Footer';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div style={styles.container}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={styles.body}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = {
  container: {
    width: '100%',
    hegiht: '100vh',
    minHeight: '100vh',
    overflow: 'hidden'
  },
  body: {
    width: '70%',
    height: '84vh',

    margin: '0 auto',
    overflow: 'auto'
  }
};

export default Layout;
