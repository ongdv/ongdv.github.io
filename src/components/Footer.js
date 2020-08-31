import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors';
import { Content } from './Layout';
import { media } from '../MediaQueries';

const FooterWrapper = styled.div`
  background: ${Colors.darkest};
  color: ${Colors.white};
  padding: ${props => (props.big ? '210px' : props.medium ? '100px' : '80px')} 0 60px 0;
  ${media.tablet`padding: ${props => (props.big ? '150px' : props.medium ? '100px' : '128px')} 20px 50px 20px;`}
`;

const Copyright = styled.p`
  text-align: center;
`;

const Footer = ({ big, medium }) => (
  <FooterWrapper {...(big && { big })} {...(medium && { medium })}>
    <Content>
      <Copyright white>
        Powerd By{' '}
        <a style={{ color: 'white' }} href="https://gatsbyjs.org">
          Gatsby
        </a>
      </Copyright>
      <Copyright white align="left">
        Template By{' '}
        <a style={{ color: 'white' }} href="https://github.com/LekovicMilos">
          Milos Lekovic
        </a>
      </Copyright>
      <Copyright white align="center">
        © OngDV 2020. All rights reserved.
      </Copyright>
    </Content>
  </FooterWrapper>
);

export default Footer;
