import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout from '../components/Layout';
import { HireMe } from '../components/Button.js';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
import Colors from '../Colors';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import RightCard from '../components/RightCard';
import LeftCard from '../components/LeftCard';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 60px 0;
  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
  .avatar {
    max-width: 200px;
    width: 80%;
    margin: 0 auto 50px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
  .link {
    padding: 0;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
  }
  .portfolio {
    margin: 100px 0 50px 0;
    font-size: 42px;
  }
`;

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

class Homepage extends React.Component {
  state = {
    openHireMePopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    const { data } = this.props;
    const { avatarHomepage, portfolio } = data;
    const { edges } = portfolio;
    const list = edges.map((item, idx) => {
      return idx % 2 === 0 ? <LeftCard key={idx} {...item} /> : <RightCard key={idx} {...item} />;
    });

    return (
      <HomepageWrapper>
        <Layout theme="white" bigFooter openContactPopup={this.openContactPopup}>
          <AboveFold>
            <Img fluid={avatarHomepage.childImageSharp.fluid} alt="OngDV" className="avatar" />
            <t.H1 primary align="center">
              오경우(
              <a target="_blank" href="https://github.com/ongdv">
                ongdv
              </a>
              )
            </t.H1>

            <t.H2 primary align="center" bold>
              사진과 코딩을 사랑하는 개발자.
            </t.H2>
            <t.P align="center" max70 className="who-desc">
              언제나 최신동향을 따라가려 노력하며, 스스로 배운 것을 주위 사람들에게 가르쳐주며 스터디하는 것을
              좋아합니다. <br />
              아직 스스로에게 '개발자'라는 호칭을 쓰는 것은 모자라다고 판단합니다. 당신이 저를 개발자라는 호칭이
              적합한지 알려주세요.
            </t.P>
          </AboveFold>
          {/* <t.H2 primary align="center" bold>
            Projects
          </t.H2> */}
          {/* {list} */}
          <WorkWithMe>
            <t.H1 green>Contact</t.H1>
            <t.LargeP>If you contact me?</t.LargeP>
            <HireMe onClick={this.openContactPopup} book>
              Contact me
            </HireMe>
          </WorkWithMe>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </HomepageWrapper>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
    portfolio: allMarkdownRemark {
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
`;
