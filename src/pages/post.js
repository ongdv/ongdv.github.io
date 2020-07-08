import React from 'react';
import Layout from '../components/layout';

const post = (props) => {
  console.log(props);
  return (
    <Layout>
      11
      <pre>{JSON.stringify(props)}</pre>
    </Layout>
  );
};

export default post;
