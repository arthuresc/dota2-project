import React, { Children } from 'react';
import { useRoutes } from 'react-router';
import routes from '../../routes/routes';
import { Layout } from 'antd';

// type Props = {};

export default function Content() {
  const elements = useRoutes(routes);

  return (
    <Layout style={{ margin: '1rem', borderRadius: '8px' }}>{elements}</Layout>
  );
}
