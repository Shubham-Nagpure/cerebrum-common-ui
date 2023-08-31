import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Layout, Menu, MenuProps } from 'antd';

import draft from '../../assets/images/draft.svg';
import publish from '../../assets/images/publish.svg';

import './index.scss';

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const { t } = useTranslation();

  const menuListNames: string[] = [t('Draft'), t('Published')];

  const menuList: MenuProps['items'] = [draft, publish].map((icon, index) => {
    const key = String(index + 1);
    const name = menuListNames[index];

    return {
      key: `nav${key}`,
      icon: React.createElement('img', { src: icon }),
      label: name
    };
  });

  return (
    <Layout>
      <Sider>
        <Menu
          className="sider"
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          items={menuList}
        />
      </Sider>
    </Layout>
  );
};

export default Sidebar;
