import React from 'react';

const Footer = (props) => {
  return (
    <footer style={styles.footer}>
      © OngDV {new Date().getFullYear()}, Built with<a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  );
};

const styles = {
  footer: {
    width: '70%',
    height: '8%',

    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default Footer;
