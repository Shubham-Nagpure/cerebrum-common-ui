import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { DRAFT_PROJECT, PUBLISHED_PROJECT } from '../../root/routesConstants';
import draft from '../../assets/images/draft.png';
import publish from '../../assets/images/publish.png';

import './index.scss';

const { Sider } = Layout;
// const menuListNames: string[] = ['Draft', 'Published'];
// const menuListUrls: string[] = [DRAFT_PROJECT, PUBLISHED_PROJECT];
// const menuList: MenuProps['items'] = [draft, publish].map((icon, index) => {
//   const key = String(index + 1);
//   const name = menuListNames[index];
//   const route = menuListUrls[index];

//   return {
//     key: `nav${key}`,
//     icon: React.createElement('img', { src: icon }),
//     label: name,
//     link: route
//   };
// });

const Sidebar: React.FC = () => {
  return (
    <Sider>
      <Menu
        className="sider"
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
      >
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
    </Sider>
  );
};

export default Sidebar;
