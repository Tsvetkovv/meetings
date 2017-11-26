import React from 'react';
import Users from './Users';
import Layout from '../../components/Layout';

async function action() {
  return {
    chunks: ['users'],
    title: 'Users',
    component: (
      <Layout>
        <Users />
      </Layout>
    ),
  };
}

export default action;
