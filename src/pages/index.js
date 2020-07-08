import React from 'react';
import { Link, graphql, navigateTo } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = props => {
    const { data, pathContext } = props;

    const {
        allMarkdownRemark: { edges },
    } = data;

    const list = edges.map(({ node }, idx) => {
        const { html } = node;
        const { path, title } = node.frontmatter;
        console.log(node);
        return <div dangerouslySetInnerHTML={{ __html: html }} key={idx} onClick={() => navigateTo(`/${path}`)} />;
    });

    return (
        <Layout>
            <SEO title="Home" />
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            {list}
            <pre>{JSON.stringify(pathContext)}</pre>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
            </div>
            <Link to="/page-2/">Go to page 2</Link> <br />
            <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </Layout>
    );
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
                    }
                }
            }
        }
    }
`;
