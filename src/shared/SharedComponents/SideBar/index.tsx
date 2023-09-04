import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Space } from 'antd';

import { DRAFT_PROJECT, PUBLISHED_PROJECT } from '../../../root/RoutesConstants';

import draft from '../../../assets/images/draft.png';
import publish from '../../../assets/images/publish.png';

import './index.scss';

const Sidebar: React.FC = () => {
  return (
    <Menu className="menu-style" mode="inline">
      <Menu.Item key="1">
        <Space direction="horizontal">
          <img className="icon-style" src={draft} height={20} width={20} />
          <span> Draft</span>

          <Link to={DRAFT_PROJECT} />
        </Space>
      </Menu.Item>
      <Menu.Item key="2">
        <Space direction="horizontal">
          <img className="icon-style" src={publish} height={20} width={20} />
          <span>Published</span>
          <Link to={PUBLISHED_PROJECT} />
        </Space>
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;
