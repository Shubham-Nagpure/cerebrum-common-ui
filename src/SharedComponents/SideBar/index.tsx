import * as React from 'react';

import { Layout, Menu, MenuProps } from 'antd';
import { LaptopOutlined, UserOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const menuListNames: string[] = ['Draft', 'Published'];

const menuList: MenuProps['items'] = [UserOutlined, LaptopOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    const name = menuListNames[index];

    return {
      key: `nav${key}`,
      icon: React.createElement(icon),
      label: name
    };
  }
);

const Sidebar: React.FC = () => {
  return (
    <Layout>
      <Sider>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100vh' }}
          items={menuList}
        />
      </Sider>
    </Layout>
  );
};

export default Sidebar;
