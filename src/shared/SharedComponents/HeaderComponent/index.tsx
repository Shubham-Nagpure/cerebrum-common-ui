import { useState } from 'react';
import { Layout, Popover } from 'antd';

import LanguageSelector from '../LanguageSelector';

import i18Icon from '../../../assets/images/i18.svg';
import './index.scss';

const { Header } = Layout;

const HeaderComponent: React.FC = () => {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Header className="header">
      <div className="demo-logo">CERE-BRUM</div>
      <div className="menu">
        <div className="i18-button">
          <Popover
            content={<LanguageSelector hide={hide} />}
            overlayStyle={{
              width: '139px',
              height: '70px'
            }}
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <img className="i18-icon" src={i18Icon} />
          </Popover>
        </div>
        <div>
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
