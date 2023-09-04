import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Space } from 'antd';

import { getCurrentRouteFromLocation } from '../../sharedUtils/routeUtils';
import { DRAFT_PROJECT, PUBLISHED_PROJECT } from '../../../root/RoutesConstants';
import { DRAFT, PUBLISHED } from '../../constants/globalConstants';
import draft from '../../../assets/images/draft.png';
import publish from '../../../assets/images/publish.png';

import './index.scss';
import { toUpperCaseFirstLetter } from '../../sharedUtils/stringUtils';

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();

  const [currentRoute, setCurrentRoute] = React.useState(
    getCurrentRouteFromLocation(pathname)
  );

  return (
    <Menu className="menu-style" mode="inline" selectedKeys={[currentRoute]}>
      <Menu.Item key={DRAFT} onClick={() => setCurrentRoute(DRAFT)}>
        <Space direction="horizontal">
          <img className="icon-style" src={draft} height={20} width={20} />
          <span>{toUpperCaseFirstLetter(DRAFT)}</span>
          <Link to={DRAFT_PROJECT} />
        </Space>
      </Menu.Item>
      <Menu.Item key={PUBLISHED} onClick={() => setCurrentRoute(PUBLISHED)}>
        <Space direction="horizontal">
          <img className="icon-style" src={publish} height={20} width={20} />
          <span>{toUpperCaseFirstLetter(PUBLISHED)}</span>
          <Link to={PUBLISHED_PROJECT} />
        </Space>
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;
