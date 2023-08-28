import React from 'react';
import { Layout } from 'antd';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

const Dashboard: React.FC = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Navbar />
      <Sidebar />
    </Layout>
  );
};

export default Dashboard;
