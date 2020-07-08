import React, { useState } from "react"
import styled from "styled-components"
import * as Mixins from "../../Mixins"
import * as t from "../../Typography"
import Layout, { Content } from "../../components/Layout"
import HireMePopup from "../../components/HireMePopup.js"
import { media } from "../../MediaQueries"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding-bottom: 100px;

  ${t.H1} {
    margin-bottom: 25px;
  }
  ${t.H4} {
    line-height: 1.14;
  }
  ${media.tablet`background-position: center top 0px;`};
`

const AboutMeWrapper = styled.div`
  ${Mixins.wrapper}
  .m-b-60 {
    margin-bottom: 60px;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    min-height: 540px;
    ${media.phone`min-height: 620px;`};
  }
  .gatsby-image {
    ${media.tablet`text-align: center;`}
    div {
      padding: 0;
    }
    picture img {
      max-width: 85%;
      position: relative;
      ${media.tablet`max-width: 80%;`}
    }
  }
  .avatar {
    max-width: 400px;
    width: 80%;
    margin: 0 auto 100px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
`

const AboutPresenter = props => {
  const { data } = props
  const [openHireMePopup, setOpenHireMePopup] = useState(false)

  return (
    <AboutMeWrapper>
      <Layout theme="white" openContactPopup={setOpenHireMePopup(true)}>
        <AboveFold>
          <t.H1 green align="center">
            오경우(OngDV)
          </t.H1>
          <t.LargeP align="left" max70>
            개발과 사진에 애착을 가지는 개발자 오경우입니다. <br />
            현재 웹개발을 주로 하고 있으며 프론트엔드와 백엔드 둘 다 좋아합니다.
            프론트 엔드 개발을 좋아하지만, 시스템 요구사항이나 백엔드 개발을
            활용하고, 프론트 엔드에 가중치를 두는 프로젝트를 선호합니다.
            <br />
            언제나 최신동향을 따라가려 노력하며, 스스로 배운 것을 주위
            사람들에게 가르쳐주며 스터디하는 것을 좋아합니다. 아직 스스로에게
            '개발자'라는 호칭을 쓰는 것은 모자라다고 판단합니다. 당신이 저를
            개발자라는 호칭이 적합한지 알려주세요.
          </t.LargeP>
        </AboveFold>
        <Content>
          <Img
            fluid={data.avatarAbout.childImageSharp.fluid}
            alt="Name Surname"
            className="avatar"
          />
        </Content>
      </Layout>
      <HireMePopup
        open={openHireMePopup}
        handleClose={setOpenHireMePopup(false)}
      />
    </AboutMeWrapper>
  )
}

export default AboutPresenter
export const pageQuery = graphql`
  query {
    avatarAbout: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`
