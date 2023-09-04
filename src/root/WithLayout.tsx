import { Row, Col } from 'antd';
import Layout from 'antd/es/layout/layout';
import { Outlet } from 'react-router';

import { HeaderComponent, Sidebar } from '../shared/SharedComponents';

import './withLayout.scss';

const WithLayout = (
  wrappedComponent: React.ReactNode,
  includeHeader: boolean,
  includeSidebar: boolean
) => {
  return (
    <Layout>
      {includeHeader && <HeaderComponent />}
      <Row>
        <Col span={4}>{includeSidebar && <Sidebar />}</Col>
        <Col span={20} className="wrapped-component-style">
          {wrappedComponent}
        </Col>
      </Row>
      <Outlet />
    </Layout>
  );
};

export default WithLayout;
