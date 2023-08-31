import { useTranslation } from 'react-i18next';
import './i18n/i18n';
import { ConfigProvider } from 'antd';

import RoutesComponent from './root/RoutesComponent';

import './App.css';
import './assets/stylesheets/main.scss';

function App() {
  const { i18n } = useTranslation();

  return (
    <ConfigProvider direction={i18n?.dir(i18n.language)}>
      <RoutesComponent />
    </ConfigProvider>
  );
}

export default App;
