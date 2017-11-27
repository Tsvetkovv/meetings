import React from 'react';
import Profiles from './Profiles';
import Layout from '../../components/Layout';

async function action() {
  return {
    chunks: ['profiles'],
    title: 'Profiles',
    component: (
      <Layout>
        <Profiles />
      </Layout>
    ),
  };
}

export default action;
