import React from 'react';
import Pairs from './Pairs';
import Layout from '../../components/Layout';

async function action() {
  return {
    chunks: ['pairs'],
    title: 'Pairs',
    component: (
      <Layout>
        <Pairs />
      </Layout>
    ),
  };
}

export default action;
