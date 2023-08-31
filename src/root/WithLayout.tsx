import { Outlet } from 'react-router';
import { Row, Col } from 'antd';

import Sidebar from '../SharedComponents/SideBar/index';
import HeaderComponent from '../SharedComponents/Header/index';

const WithLayout = (
  wrappedComponent: React.ReactNode,
  includeHeader: boolean,
  includeSidebar: boolean
) => {
  return (
    <>
      {includeHeader && <HeaderComponent />}
      <Row>
        <Col span={4}>{includeSidebar && <Sidebar />} </Col>
        <Col span={20}> {wrappedComponent}</Col>
      </Row>
      <Outlet />
    </>
  );
};

export default WithLayout;