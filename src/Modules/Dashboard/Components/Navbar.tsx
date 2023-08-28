import { Menu, Layout } from 'antd';

const { Header } = Layout;

const Navbar: React.FC = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'right' }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ display: 'flex', alignItems: 'right' }}
        defaultSelectedKeys={['2']}
      />
    </Header>
  );
};

export default Navbar;
