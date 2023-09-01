import { Row, Col } from 'antd';
import { Outlet } from 'react-router';

import { HeaderComponent, Sidebar } from '../shared/SharedComponents';

import './withLayout.scss';

const WithLayout = (
  wrappedComponent: React.ReactNode,
  includeHeader: boolean,
  includeSidebar: boolean
) => {
  return (
    <>
      {includeHeader && <HeaderComponent />}
      <Row>
        <Col span={4}>{includeSidebar && <Sidebar />}</Col>
        <Col span={20} className="wrapped-component-style">
          {wrappedComponent}
        </Col>
      </Row>
      <Outlet />
    </>
  );
};

export default WithLayout;
