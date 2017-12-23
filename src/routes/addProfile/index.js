import React from 'react';
import AddProfile from './AddProfile';
import Layout from '../../components/Layout';

async function action() {
  return {
    chunks: ['addProfile'],
    title: 'AddProfile',
    component: (
      <Layout>
        <AddProfile />
      </Layout>
    ),
  };
}

export default action;
