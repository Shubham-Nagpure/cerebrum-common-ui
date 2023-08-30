import { useTranslation } from 'react-i18next';

import './index.scss';

interface IProps {
  hide: () => void;
}

const LanguageSelector: React.FC<IProps> = ({ hide }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="pop-over-content">
      <ul>
        <li>
          <a
            onClick={() => {
              hide();
              changeLanguage('en');
            }}
          >
            English
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              hide();
              changeLanguage('ar');
            }}
          >
            عربي
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelector;
