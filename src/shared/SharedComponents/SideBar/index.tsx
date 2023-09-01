import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

import { DRAFT_PROJECT, PUBLISHED_PROJECT } from '../../../root/RoutesConstants';

import draft from '../../../assets/images/draft.png';
import publish from '../../../assets/images/publish.png';

import './index.scss';

const Sidebar: React.FC = () => {
  return (
    <Menu className="menu-style" mode="inline">
      <Menu.Item key="1">
        <span>
          <img className="icon-style" src={draft} height={20} width={20} />
          Draft
        </span>
        <Link to={DRAFT_PROJECT} />
      </Menu.Item>
      <Menu.Item key="2">
        <span>
          <img className="icon-style" src={publish} height={20} width={20} />
          Published
        </span>
        <Link to={PUBLISHED_PROJECT} />
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;
