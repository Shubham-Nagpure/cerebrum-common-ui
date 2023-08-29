import { Menu, Layout } from 'antd';

const { Header } = Layout;

const HeaderComponent: React.FC = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'right' }}>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ display: 'flex', alignItems: 'right' }}
        defaultSelectedKeys={['2']}
      />
    </Header>
  );
};

export default HeaderComponent;
