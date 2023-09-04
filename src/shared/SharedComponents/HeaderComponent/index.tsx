import { Layout } from 'antd';

import LanguageSelector from '../LanguageSelector';

import './index.scss';

const { Header } = Layout;

const HeaderComponent: React.FC = () => {
  return (
    <Header className="header">
      <div className="demo-logo">CERE-BRUM</div>
      <div className="menu">
        <LanguageSelector />
        <div className="avatar">
          <img
            src="https://picsum.photos/id/237/200/300"
            alt=""
            className="image-avatar"
          />
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
