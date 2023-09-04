import { useTranslation } from 'react-i18next';
import { Dropdown, MenuProps } from 'antd';

import { Arabic, English } from '../../../i18n/translations';

import done from '../../../assets/images/done.svg';
import i18Icon from '../../../assets/images/i18.svg';
import './index.scss';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    console.log(lng);
    i18n.changeLanguage(lng);
  };

  const items = [
    {
      label: English,
      key: 'en',
      icon: <img className="icon" src={done} />
    },
    {
      label: Arabic,
      key: 'ar',
      icon: <img className="icon" src={done} />
    }
  ];

  const onClick: MenuProps['onClick'] = ({ key }) => {
    changeLanguage(key);
  };

  return (
    <div className="languageDropdown">
      <Dropdown
        className="languageDropdownItem"
        menu={{ items, selectable: true, defaultSelectedKeys: ['1'], onClick }}
        placement="bottom"
      >
        <img className="i18-icon" src={i18Icon} />
      </Dropdown>
    </div>
  );
};

export default LanguageSelector;
