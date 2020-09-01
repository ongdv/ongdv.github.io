import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import { Content } from '../components/Layout';
import Placeholder from '../images/placeholder.png';
import { LinkButton } from '../components/Button.js';
import { darken } from 'polished';
import { media } from '../MediaQueries';
import Colors from '../Colors';
const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const ItemImage = styled.img`
  max-width: 85%;
  position: relative;
  ${media.tablet`max-width: none;`}
`;

const LeftCard = props => {
  const { node } = props;
  const { frontmatter } = node;
  const { id, title, description, rate, language } = frontmatter;
  return (
    <Block>
      <BlockContent>
        <DivWrapper>
          <ItemImage src={Placeholder} alt="Placeholder title" />
        </DivWrapper>
        <DivWrapper>
          <t.H2 bold>{title}</t.H2>
          <t.P>Language - {language}</t.P>
          <t.P>Participation - {rate}</t.P>
          <t.P>{description}</t.P>
          <LinkButton primary bold className="link" as="a" href={`/portfolio/${id}`}>
            상세보기
          </LinkButton>
        </DivWrapper>
      </BlockContent>
    </Block>
  );
};

export default LeftCard;
